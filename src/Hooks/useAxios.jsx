import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxios = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  axios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    });
  return axiosSecure;
};

export default useAxios;
