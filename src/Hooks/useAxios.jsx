import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../AuthProvider/AuthProvider';


const useAxios = () => {
  const { Signout } = useContext(AuthService) 
  const navigate = useNavigate(); 

  const useaxios = axios.create({
    baseURL: 'http://localhost:3000', 
  });

  useEffect(() => {
    useaxios.interceptors.request.use((config) => {
      const token = localStorage.getItem('summer-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    useaxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await Signout();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [Signout, navigate, useaxios]);

  return [useaxios];
};

export default useAxios;