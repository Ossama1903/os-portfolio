"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  clickHandler: () => void;
  imageSource: string;
  alt: string;
  width: number;
  height: number;
  hoverText: string; // Add this prop for the hover text
}

export default function Icon({
  clickHandler,
  imageSource,
  alt,
  width,
  height,
  hoverText, // Add this prop for the hover text
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {isHovered && (
        <div className="absolute bottom-full mb-2 bg-black text-white text-xs p-1 rounded">
          {hoverText}
        </div>
      )}
      <Image
        onClick={clickHandler}
        onTouchEnd={clickHandler}
        src={imageSource}
        alt={alt}
        width={width}
        height={height}
        className={`transition-transform duration-300 ${
          isHovered ? "scale-125" : "scale-100"
        } mx-1`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}
