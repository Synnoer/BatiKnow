import { NextResponse } from 'next/server';

export async function POST() {
    const res = NextResponse.json({ message: 'Logout success' });

    res.cookies.set('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 hari
        path: '/',
    });

    return res;
}
