import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/Context";
import { useContext } from "react";
import useAxios from "./useAxios";

const useHr = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data: isHr } = useQuery({
    queryKey: [user?.email, "isHr"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/hr/${user.email}`);

      return res.data?.hr;
    },
  });
  return [isHr];
};

export default useHr;
