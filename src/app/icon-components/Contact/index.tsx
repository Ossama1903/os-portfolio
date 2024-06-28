import Icon from "@/app/components/Icon";

interface ContactProps {
  clickHandler: () => void;
}

export default function Contact({ clickHandler }: ContactProps) {
  return (
    <Icon
      clickHandler={clickHandler}
      imageSource="/images/contact.png"
      alt="contact"
      width={48}
      height={48}
      hoverText="Contact"
    />
  );
}
