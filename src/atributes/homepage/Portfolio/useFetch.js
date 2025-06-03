import { useDispatch } from "react-redux";
import { fetchRepositoriesRequest } from "../../homepageSlice";
import { useEffect } from "react";
import username from "../../../assets/GitHubUsername";

export const useFetchRepositories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositoriesRequest(username));
  }, [username]);
};
