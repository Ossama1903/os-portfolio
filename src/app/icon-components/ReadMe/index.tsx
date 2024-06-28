import Icon from "@/app/components/Icon";

interface ReadMeProps {
  clickHandler: () => void;
}

export default function ReadMe({ clickHandler }: ReadMeProps) {
  return (
    <Icon
      clickHandler={clickHandler}
      imageSource="/images/readme.png"
      alt="readme"
      width={32}
      height={32}
      hoverText="READMe"
    />
  );
}
