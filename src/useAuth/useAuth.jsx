import { useContext } from 'react';
import AuthContexts from '../Contexts/AuthContexts';

const useAuth = () => {
  const userInformation = useContext(AuthContexts);
  return userInformation;
};

export default useAuth;
