import Icon from "@/app/components/Icon";

interface ResumeProps {
  clickHandler: () => void;
}

export default function Resume({ clickHandler }: ResumeProps) {
  return (
    <Icon
      clickHandler={clickHandler}
      imageSource="/images/resume.png"
      alt="terminal"
      width={38}
      height={38}
      hoverText="Terminal"
    />
  );
}
