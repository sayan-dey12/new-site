import Image from "next/image";

export default function ProtectedImage(){
    return(
        <Image
        src="/me-photo.jpg"
        alt="Sayan Dey"
        width={96}
        height={96}
        sizes="96px"
        priority
        draggable={false}
        className="h-24 w-24 rounded-2xl object-cover"
      />
    );
}