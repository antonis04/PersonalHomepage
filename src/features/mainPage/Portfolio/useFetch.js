import { useDispatch } from "react-redux";
import { fetchRepositoriesRequest } from "../../homepageSlice";
import { useEffect } from "react";
import username from "../../../assets/GitHubUsername";

/**
 * Custom hook to fetch GitHub repositories on component mount
 */
export const useFetchRepositories = () => {
  const reduxDispatch = useDispatch();

  useEffect(() => {
    reduxDispatch(fetchRepositoriesRequest(username));
  }, [reduxDispatch]);
};
