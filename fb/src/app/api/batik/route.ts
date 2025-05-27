import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '../../../../db/generated/prisma';

export async function GET(req: NextRequest) {
    const search = req.nextUrl.searchParams.get('search');
    const query: Prisma.batikFindManyArgs = {}
    if (search) query.where = {
        OR: [{ name: { contains: search } }, { originCity: { contains: search } }]
    }
    const batik = await prisma.batik.findMany(query)

    const res = NextResponse.json({ message: 'Data Retrieved', data: batik });

    return res;
}
