import { verifyToken } from '@/lib/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('token')!.value;
        const user = verifyToken(token)

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
