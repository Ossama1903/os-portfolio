"use client";
import Icon from "@/app/components/Icon";
import Image from "next/image";
import { useState } from "react";

export default function Terminal() {
  const [isHovered, setIsHovered] = useState(false);
  const clickHandler = () => {
    console.log("terminal clicked");
  };

  return (
    <Icon
      clickHandler={clickHandler}
      imageSource="/images/terminal.png"
      alt="terminal"
      width={50}
      height={50}
    />
  );
}
