"use client";

import Image from "next/image";

interface ProtectedMetaAvatarProps{
    name : string
}

export default function ProtectedMetaAvatar( {name}: ProtectedMetaAvatarProps ){
    return(
        <Image
            src="/me-photo.jpg"
            alt={name}
            width={32}
            height={32}
            priority
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="rounded-full"
          />
    );
}