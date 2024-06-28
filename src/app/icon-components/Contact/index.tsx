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
      width={50}
      height={50}
      hoverText="Contact"
    />
  );
}
