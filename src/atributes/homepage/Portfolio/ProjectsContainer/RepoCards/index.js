// Repository card component for displaying GitHub project information
import { RepositoryCard } from "./styled";
import { ProjectDescription, RepositoryTitle } from "./styled";
import { UrlDisplayComponent } from "../UrlLinks";

export const RepositoryDisplayItem = ({ repoData }) => {
  const {
    name: repositoryName,
    description: repoDescription,
    homepage: homepageUrl,
    html_url: sourceCodeUrl,
    owner: repoOwner,
    fork: isFork,
    private: isPrivateRepo,
    has_pages: hasGitHubPages,
  } = repoData;

  /**
   * Determines if a repository contains a deployable web application
   * based on repository name and description keywords
   */
  const checkIfWebApplication = (repositoryName, repositoryDescription) => {
    const webProjectKeywords = [
      "website",
      "portfolio",
      "homepage",
      "app",
      "site",
      "web",
      "react",
      "vue",
      "angular",
      "html",
      "css",
      "javascript",
      "frontend",
      "ui",
      "ux",
      "bootstrap",
      "landing",
    ];

    const combinedText = `${repositoryName} ${
      repositoryDescription || ""
    }`.toLowerCase();
    const hasWebKeywords = webProjectKeywords.some((keyword) =>
      combinedText.includes(keyword)
    );
    const isGitHubPagesRepo = repositoryName.includes(".github.io");

    return hasWebKeywords || isGitHubPagesRepo;
  };

  // Build live demo URL based on available information
  let liveUrl = homepageUrl;

  /**
   * Generate GitHub Pages URL when:
   * - No custom homepage URL exists
   * - Repository is public and not forked
   * - Either has GitHub Pages enabled or appears to be a web project
   */
  if (!liveUrl && !isFork && !isPrivateRepo && repoOwner?.login) {
    const shouldGenerateUrl =
      hasGitHubPages || checkIfWebApplication(repositoryName, repoDescription);
    if (shouldGenerateUrl) {
      liveUrl = `https://${repoOwner.login}.github.io/${repositoryName}/`;
    }
  }

  return (
    <RepositoryCard>
      <RepositoryTitle>{repositoryName}</RepositoryTitle>
      <ProjectDescription>{repoDescription}</ProjectDescription>
      {liveUrl && (
        <UrlDisplayComponent linkLabel={"Demo:"} targetUrl={liveUrl} />
      )}
      <UrlDisplayComponent linkLabel={"Code:"} targetUrl={sourceCodeUrl} />
    </RepositoryCard>
  );
};
