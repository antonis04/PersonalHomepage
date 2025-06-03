import axios from "axios";

const gitHubAPI = "https://api.github.com/users"

export const getUserRepositories = async (username) => {
    const response = await axios.get(`${gitHubAPI}/${username}/repos`);
    return response.data;
};
