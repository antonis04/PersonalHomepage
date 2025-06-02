import { useDispatch } from "react-redux";
import { fetchRepositoriesRequest } from "../../homepageSlice";
import { useEffect } from "react";
import username from "../../../../assets/gitHubUsername";

export const useFetchRepositories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepositoriesRequest(username));
    }, [username]);
};