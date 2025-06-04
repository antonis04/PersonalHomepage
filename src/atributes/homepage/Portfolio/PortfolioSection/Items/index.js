import { Project } from "./styled";
import { Description, ProjectName } from "./styled";
import { LinkContainer } from "../Links";

export const ProjectItem = ({ project }) => {
  const { name, description, homepage, html_url, owner, fork, private: isPrivate } = project;

  // Generate demo URL: use homepage if set, otherwise generate GitHub Pages URL for public repos
  let demoUrl = homepage;
  if (!demoUrl && !fork && !isPrivate && owner && owner.login) {
    // Generate GitHub Pages URL for all public, non-fork repos
    demoUrl = `https://${owner.login}.github.io/${name}/`;
  }

  return (
    <Project>
      <ProjectName>{name}</ProjectName>
      <Description>{description}</Description>
      {demoUrl && (
        <LinkContainer 
          description={"Demo:"} 
          href={demoUrl} />
      )}
      <LinkContainer 
        description={"Code:"} 
        href={html_url} />
    </Project>
  );
};
