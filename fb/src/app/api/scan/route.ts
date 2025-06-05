import fs from 'fs';
import path from 'path';
import prisma from '@/lib/prisma';
import { User } from '@/context/AuthContext';
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

    if (image instanceof Blob) {
        const buffer = Buffer.from(await image.arrayBuffer());

        const res = await fetch(process.env.PREDICTOR_URL!, {
            method: "POST",
            body: formData
        })
        if (!res.ok)
            return NextResponse.json({ message: 'Scan failed' }, { status: 404 });

        const { class_id, confidence } = await res.json()
        console.log(class_id, confidence);

        const batik = await prisma.batik.findFirst({ where: { classId: class_id.toString() } })

        if (!user) return NextResponse.json({ message: 'Batik scanned successfully.', batik, confidence });

        const filename = randomUUID() + '.' + image.name;
        fs.writeFileSync(path.resolve(__dirname, '../../../../../public/uploads', filename), buffer);

        try {
            const history = await prisma.history.create({
                data: {
                    userUuid: user.uuid,
                    batikUuid: batik!.uuid,
                    pictureUrl: filename,
                }
            })

            return NextResponse.json({ message: 'Batik scanned successfully.', batik, history, confidence });
        } catch (e) {
            console.log(e)
            return NextResponse.json({ message: (e as Error).message }, { status: 500 });
        }
    }
    return NextResponse.json({ message: 'Scan failed' }, { status: 404 });
}
