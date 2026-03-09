import cloudinary from "@/lib/cloudinary";

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

    const result : any = await new Promise((resolve , rejects)=>{
      cloudinary.uploader.upload_stream({folder: "new-site"} , (error , res)=>{
        if (error) rejects(error)
        else resolve(res)
      }).end(buffer)
    })
    return Response.json({ url: result.secure_url });
  } catch (error) {
      return Response.json({ 
        status: false,
        error: "Upload failed" }, 
        { status: 500 })
  }
}