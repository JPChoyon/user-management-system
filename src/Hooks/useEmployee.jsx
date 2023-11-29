import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/Context";
import { useContext } from "react";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data: isEmployee } = useQuery({
    queryKey: [user?.email, "isEmployee"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/employee/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isEmployee];
};

export default useAdmin;
