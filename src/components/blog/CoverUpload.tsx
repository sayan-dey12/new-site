"use client"
type Props ={
  cover : string,
  setCover:(v: string)=>void
}
export default function CoverUpload({ cover , setCover }: Props) {

  const uploadImage = async (file: File) => {

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    setCover(data.url)
  }

  return (
    <div>
      <label>Cover image:</label>
      <input
            type="file"
            accept="image/*"
            className="bg-card rounded-2xl m-4"
            onChange={(e) => {
              if (!e.target.files) return
              uploadImage(e.target.files[0])
            }}
          />
    </div>
   
  )
}