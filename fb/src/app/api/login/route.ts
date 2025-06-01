import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs';
import { User } from '@/context/AuthContext';
import { signToken } from '@/lib/jwt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { username, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { username } })

    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    if (!await bcrypt.compare(password, user!.password)) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const resData: User = { uuid: user.uuid, username, name: user.name };
    const token = signToken(resData, { expiresIn: '1d' })
    const res = NextResponse.json({ message: 'Login success', user: resData });

    res.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 hari
        path: '/',
    });

    return res;
}
