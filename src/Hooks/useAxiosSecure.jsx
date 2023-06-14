import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const useAxiosSecure = () => {
  let navigate = useNavigate(); 

  let axiosguard = axios.create({
    baseURL: 'https://b7a12-summer-camp-server-side-one.vercel.app/', 
  });

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
          navigate('/');
        }
        return Promise.reject(error);
      }
    );
  }, [ navigate, axiosguard]);

  return [axiosguard];
};

export default useAxiosSecure;