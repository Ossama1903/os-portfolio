import Icon from "@/app/components/Icon";

interface ProjectsProps {
  clickHandler: () => void;
}

export default function Projects({ clickHandler }: ProjectsProps) {
  return (
    <Icon
      clickHandler={clickHandler}
      imageSource="/images/projects.png"
      alt="projects"
      width={45}
      height={45}
      hoverText="Projects"
    />
  );
}
