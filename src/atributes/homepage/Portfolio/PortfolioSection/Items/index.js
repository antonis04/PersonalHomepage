import { Project } from "./styled";
import { Description, ProjectName } from "./styled";
import { LinkContainer } from "../Links";

export const ProjectItem = ({ project }) => {
  const { name, description, homepage, html_url, owner, fork, private: isPrivate, has_pages } = project;

  // Helper function to check if repository likely has a deployable web project
  const isLikelyWebProject = (repoName, repoDescription) => {
    const webIndicators = [
      'website', 'portfolio', 'homepage', 'app', 'site', 'web', 'react', 'vue', 'angular', 
      'html', 'css', 'javascript', 'frontend', 'ui', 'ux', 'bootstrap', 'landing'
    ];
    
    const nameAndDesc = `${repoName} ${repoDescription || ''}`.toLowerCase();
    return webIndicators.some(indicator => nameAndDesc.includes(indicator)) || 
           repoName.includes('.github.io');
  };

  // Generate demo URL with intelligent filtering
  let demoUrl = homepage; // Always use homepage if explicitly set
  
  // Only generate GitHub Pages URL if:
  // 1. No custom homepage is set
  // 2. Repository is not a fork and not private
  // 3. Either GitHub Pages is enabled OR repository appears to be a web project
  if (!demoUrl && !fork && !isPrivate && owner && owner.login) {
    if (has_pages || isLikelyWebProject(name, description)) {
      demoUrl = `https://${owner.login}.github.io/${name}/`;
    }
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
