import fs from 'fs/promises';
import path from 'path';
import mime from 'mime-types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ filename: string }> }
) {
    const { filename } = await params;
    const filePath = path.resolve('../../../../../public/uploads', filename);

    try {
        const fileData = await fs.readFile(filePath);
        const contentType = mime.lookup(filePath) || 'application/octet-stream';

        return new NextResponse(fileData, {
            status: 200,
            headers: {
                'Content-Type': contentType,
            },
        });
    } catch {
        return new NextResponse('File not found', { status: 404 });
    }
}
