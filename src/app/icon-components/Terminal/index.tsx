import Icon from "@/app/components/Icon";

interface TerminalProps {
  clickHandler: () => void;
}

export default function Terminal({ clickHandler }: TerminalProps) {
  return (
    <Icon
      clickHandler={clickHandler}
      imageSource="/images/terminal.png"
      alt="terminal"
      width={41}
      height={41}
      hoverText="Terminal"
    />
  );
}
