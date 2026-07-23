import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      token: process.env.BLOB_READ_WRITE_TOKEN, 
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: [
            'model/stl',
            'application/octet-stream', // STL binary
            'model/obj',
            'model/3mf',
            'text/plain',
          ],
          addRandomSuffix: true,
          maximumSizeInBytes: 50 * 1024 * 1024, // 50 MB
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log('Upload abgeschlossen:', blob.url);
        // hier später: Resend / DB
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
     console.log("error in route.ts:", (error as Error).message)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}