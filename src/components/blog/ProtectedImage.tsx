"use client";

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
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        className="rounded-2xl object-cover"
      />
    );
}