import { createContext, useState, useEffect } from 'react';
import api, { authApi } from './api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [finished, setFinished] = useState(false);
  const [reloadUser, setReloadUser] = useState(0);
  const [user, setUser] = useState(null);
  const [transfer, setTransfer] = useState(null);
  const [toggler, setToggler] = useState(false);
  useEffect(() => {
    setFinished(false);
    const fetchUser = async () => {
      const userId = localStorage.getItem('user_id');
      if (userId) {
        try {
          const response = await authApi.get(`accounts/lists/${userId}/`);
          setUser(response.data);
          setFinished(true);
        } catch (error) {
          localStorage.removeItem('token');
          localStorage.removeItem('user_id');
          setFinished(true);
          window.location.href = '/accounts/login';
        }
      } else {
        setFinished(true);
      }
    };
    fetchUser();
  }, [reloadUser]);

  //login
  const login = async (credentials) => {
    try {
      const response = await api.post('accounts/login/', credentials);
      if (response.data.error) {
        return 'error'
      }
      const { token, user_id } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user_id', user_id);
      const userResponse = await api.get(`accounts/lists/${user_id}/`);
      setUser(userResponse.data);
      return 'success'
    } catch (error) {
      return 'error'
    }
  };

  //logout
  const logout = async () => {
    const response = await authApi.post('accounts/logout/');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    setUser(null);
    window.location.reload();
  };



  return (
    <AuthContext.Provider value={{ user, logout, login, setReloadUser, reloadUser, finished, transfer, setTransfer, toggler, setToggler }}>
      {children}
    </AuthContext.Provider>
  );
};

// Check if the token exists in local storage
const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return token !== null;
  }
  return false;
};

export { AuthContext, AuthProvider, isAuthenticated };
