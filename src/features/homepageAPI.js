import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com/users";

/**
 * Fetches user repositories from GitHub API
 * Input: githubUsername - The GitHub username
 * Output: Response data containing repositories
 */
export const getUserRepositories = async (githubUsername) => {
  const apiResponse = await axios.get(
    `${GITHUB_API_BASE_URL}/${githubUsername}/repos`
  );
  return apiResponse.data;
};
