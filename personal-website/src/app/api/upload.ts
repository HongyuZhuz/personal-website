import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: "ap-southeast-2",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// /app/api/upload.js
export async function POST(request) {
    // Extract file information from the request
    const { fileName, contentType } = await request.json();

    // Create a pre-signed URL for AWS S3 upload
    const url = await getSignedUrl(s3, new PutObjectCommand({
        Bucket: "hyzawsbucket",
        Key: fileName,
        ContentType: contentType
    }), { expiresIn: 3600 });

    // Send the pre-signed URL back to the client
    return new Response(JSON.stringify({ url }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}