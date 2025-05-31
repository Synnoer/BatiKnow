import fs from 'fs';
import path from 'path';
import prisma from '@/lib/prisma';
import { User } from '@/context/AuthContext';
import { scan } from '@/lib/model';
import { randomUUID } from 'crypto';
import { verifyToken } from '@/lib/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const token = req.cookies.get('token');

    let user = null;
    if (token) {
        try {
            user = verifyToken(token?.value) as User;
            console.log(user)
        } catch (error) {
            console.log((error as Error).message)
        }
    }

    const formData = await req.formData();
    const image = formData.get('image');

    if (image instanceof File) {
        const buffer = Buffer.from(await image.arrayBuffer());

        const classId = await scan(buffer);

        const batik = await prisma.batik.findFirst({ where: { classId } })

        if (!user) return NextResponse.json({ message: 'Batik scanned successfully.', batik });

        const filename = randomUUID() + '.' + image.name;
        fs.writeFileSync(path.resolve(__dirname, '../../../../../public/uploads', filename), buffer);

        const history = await prisma.history.create({
            data: {
                userUuid: user.uuid,
                batikUuid: batik!.uuid,
                pictureUrl: filename,
            }
        })

        return NextResponse.json({ message: 'Batik scanned successfully.', batik, history });
    }
    return NextResponse.json({ message: 'Scan failed' }, { status: 404 });
}
