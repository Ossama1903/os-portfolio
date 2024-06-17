"use client";
import Icon from "@/app/components/Icon";

export default function Terminal() {
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
      hoverText="Terminal"
    />
  );
}
