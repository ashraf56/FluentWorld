import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useAxiosSecure = () => {
  const navigate = useNavigate(); 

  const AxiosGuard = axios.create({
    baseURL: 'http://localhost:3000', 
  });

  useEffect(() => {
    AxiosGuard.interceptors.request.use((config) => {
      const token = localStorage.getItem('summer-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    AxiosGuard.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          navigate('/');
        }
        return Promise.reject(error);
      }
    );
  }, [ navigate, AxiosGuard]);

  return [AxiosGuard];
};

export default useAxiosSecure;