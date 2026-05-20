import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreToken();
  }, []);

  const restoreToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      setUserToken(token);
    }

    setLoading(false);
  };

  const signIn = async () => {
    await AsyncStorage.setItem('token', 'loggedin');
    setUserToken('loggedin');
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        signIn,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);