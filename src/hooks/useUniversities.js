
import { HttpClient } from "../../utils/HttpClient";
import { useQuery } from "@tanstack/react-query";

const useUniversities = () => {
  const query = useQuery({
    queryKey: ["universitiesList"],
    queryFn: () =>
      HttpClient.get("/search?country=United%20Arab%20Emirates")
        .then((res) => res?.data)
        .catch((err) => err),
    staleTime: 60 * 15 * 1000 // 15 mins
  });

  return { ...query };
};

export default useUniversities;

