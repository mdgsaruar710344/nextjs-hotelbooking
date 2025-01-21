import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  timeout: 60000,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file'); // 'file' matches the frontend input name
  console.log('file in route',file);
    if (!file) {
      return new Response(JSON.stringify({ error: 'No file uploaded' }), {
        status: 400,
      });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // Convert file to buffer
    console.log('Uploading file to Cloudinary...');
    
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'uploads' },
        (error, result) => {
          if (error) {
            console.error('Cloudinary Upload Error:', error);
            return reject(error);
          }
          resolve(result); // Resolve with the upload result
        }
      ).end(buffer); // Send the buffer to Cloudinary
    });
console.log(JSON.stringify(uploadResult.secure_url));
    return new Response(JSON.stringify({ url: uploadResult.secure_url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}