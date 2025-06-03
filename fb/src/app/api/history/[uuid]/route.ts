import prisma from '@/lib/prisma';
import { User } from '@/context/AuthContext';
import { verifyToken } from '@/lib/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ uuid: string }> }) {
  const token = req.cookies.get('token');
  if (token?.value == null) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  const user = verifyToken(token?.value) as User;
  const awaitedParams = await params;  // <-- tambahkan ini

  const history = await prisma.history.findUnique({
    where: { uuid: awaitedParams.uuid, userUuid: user.uuid },
  });

  if (!history) {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Success', data: history });
}
