import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { name, username, password } = await req.json();

    if (!name || !username || !password) {
        return NextResponse.json({ error: 'Please fill in all fields' }, { status: 401 });
    }
    
    if(password.length < 6) {
        return NextResponse.json({ error: 'Password lenght min 6 characters.' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { username } })

    if (user) {
        return NextResponse.json({ error: 'Username has been taken' }, { status: 401 });
    }

    await prisma.user.create({ data: { name, username, password: bcrypt.hashSync(password, 10).toString() } })

    const res = NextResponse.json({ message: 'Register success' });

    // Simulasi set cookie (misalnya JWT atau session ID)
    res.cookies.set('token', 'mock-token-123', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60, // 1 jam
    });

    return res;
}
