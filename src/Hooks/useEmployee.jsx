import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/Context";
import { useContext } from "react";
import useAxios from "./useAxios";

const useEmployee = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data: isEmployee } = useQuery({
    queryKey: [user?.email, "isEmployee"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/employee/${user.email}`);
      
      return res.data?.employee;
    },
  });
  return [isEmployee];
};

export default useEmployee;
