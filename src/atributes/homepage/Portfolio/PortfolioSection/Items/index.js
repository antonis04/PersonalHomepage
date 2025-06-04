import { Project } from "./styled";
import { Description, ProjectName } from "./styled";
import { LinkContainer } from "../Links";

export const ProjectItem = ({ project }) => {
  const { name, description, homepage, html_url } = project;

  return (
    <Project>
      <ProjectName>{name}</ProjectName>
      <Description>{description}</Description>
      <LinkContainer 
        description={"Demo:"} 
        href={homepage} />
      <LinkContainer 
      description={"Code:"} 
      href={html_url} />
    </Project>
  );
};
