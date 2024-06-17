"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  clickHandler: () => void;
  imageSource: string;
  alt: string;
  width: number;
  height: number;
}

export default function Icon({
  clickHandler,
  imageSource,
  alt,
  width,
  height,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Image
      onDoubleClick={clickHandler}
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
  );
}
