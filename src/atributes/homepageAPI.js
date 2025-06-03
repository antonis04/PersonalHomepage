import axios from "axios";

export const getUserRepositories = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return response.data;
};
