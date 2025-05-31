import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs';
import { User } from '@/context/AuthContext';
import { signToken } from '@/lib/jwt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { name, username, password } = await req.json();

    if (!name || !username || !password) {
        return NextResponse.json({ error: 'Please fill in all fields' }, { status: 401 });
    }

    if (password.length < 6) {
        return NextResponse.json({ error: 'Password lenght min 6 characters.' }, { status: 401 });
    }

    const userExists = await prisma.user.findUnique({ where: { username } })

    if (userExists) {
        return NextResponse.json({ error: 'Username has been taken' }, { status: 401 });
    }

    const user = await prisma.user.create({ data: { name, username, password: bcrypt.hashSync(password, 10).toString() } })

    const resData: User = { uuid: user.uuid, username, name: user.name };
    const token = signToken(resData, { expiresIn: '1d' })
    const res = NextResponse.json({ message: 'Register success', user: resData });

    res.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 hari
        path: '/',
    });

    return res;
}
