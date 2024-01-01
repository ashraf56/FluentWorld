import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../AuthProvider/AuthProvider';
let axiosguard = axios.create({
  baseURL: 'https://fluent-world-server.vercel.app/',
});
const useAxiosSecure = () => {
  let navigate = useNavigate();
  let { Signout } = useContext(AuthService)

  useEffect(() => {
    axiosguard.interceptors.request.use((config) => {
      let token = localStorage.getItem('summer-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    axiosguard.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await Signout()
          navigate('/');
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, axiosguard]);
  return [axiosguard];
};
export default useAxiosSecure;