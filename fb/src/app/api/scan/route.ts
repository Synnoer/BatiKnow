// import prisma from '@/lib/prisma'
import { scan } from '@/lib/model';
import { NextRequest, NextResponse } from 'next/server';
// import { Prisma } from '../../../../db/generated/prisma';

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const image = formData.get('image');

    if (image instanceof File) {
        const buffer = Buffer.from(await image.arrayBuffer());

        const label = await scan(buffer);

        return NextResponse.json({ message: 'Batik Scanned ' + label, data: {} });
    } else return NextResponse.json({ message: 'Scan failed' }, { status: 404 });
}
