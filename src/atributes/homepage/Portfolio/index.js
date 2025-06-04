import { useSelector } from "react-redux";
import { selectStatus } from "../../homepageSlice";
import { Loading } from "./Loading";
import { PortfolioContainer } from "./ProjectsContainer";
import { LoadingError } from "./LoadingError";
import { useFetchRepositories } from "./useFetch";

/**
 * Main portfolio component that handles different loading states
 */
export const Portfolio = () => {
  useFetchRepositories();
  const currentStatus = useSelector(selectStatus);

  switch (currentStatus) {
    case "LOADING":
      return <Loading />;
    case "ERROR":
      return <LoadingError />;
    case "SUCCESS":
      return <PortfolioContainer />;
    default:
      return <Loading />;
  }
};
