import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { username, password } = await req.json();
    console.log(username, password);

    const user = await prisma.user.findUnique({ where: { username } })

    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    if (!await bcrypt.compare(password, user!.password)) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const res = NextResponse.json({ message: 'Login success' });

    // Simulasi set cookie (misalnya JWT atau session ID)
    res.cookies.set('token', 'mock-token-123', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60, // 1 jam
    });

    return res;
}
