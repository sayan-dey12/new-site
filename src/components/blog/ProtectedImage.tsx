
import Image from "next/image";

export default function ProtectedImage(){
    return(
        <Image
        src="/me-photo.jpg"
        alt="Sayan Dey"
        width={96}
        height={96}
        priority
        draggable={false}
        className="rounded-2xl object-cover"
        sizes="96px"
      />
    );
}