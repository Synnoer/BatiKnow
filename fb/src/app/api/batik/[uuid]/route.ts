import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ uuid: string }> }) {
  const awaitedParams = await params;  // <-- tambahkan ini

  const batik = await prisma.batik.findUnique({
    where: { uuid: awaitedParams.uuid },
  });

  if (!batik) {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Success', data: batik });
}
