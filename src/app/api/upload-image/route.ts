import cloudinary from "@/lib/cloudinary";

type CloudinaryUploadResult = {
  secure_url: string
}

export async function POST(req: Request){
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File | null;
    if(!file){
      return Response.json({
        success: false,
        error: "No file uploaded"
      },{status: 400})
    }
    if(!file.type.startsWith("image/")){
      return Response.json({
          success: false,
          error: "Invalid File Type"
        },{status: 400})
    }
    const buffer = Buffer.from(await file.arrayBuffer())

    const result  = await new Promise<CloudinaryUploadResult>((resolve , reject)=>{
      cloudinary.uploader.upload_stream({folder: "new-site"} , (error , res)=>{
        if (error) reject(error)
        if (!res) {
          reject(new Error("Upload failed"))
          return
        }
        resolve({secure_url: res.secure_url})
      }).end(buffer)
    })
    return Response.json({ url: result.secure_url });
  } catch (_error) {
      return Response.json({ 
        status: false,
        error: "Upload failed" }, 
        { status: 500 })
  }
}