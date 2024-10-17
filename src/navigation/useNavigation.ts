import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {useAppSelector} from '../hooks/reduxHook';

export const useNavigation = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const user = useAppSelector(state => state.auth.isLogin);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await AsyncStorage.getItem('authToken');
        setCurrentUser(user);
      } catch (error) {
        console.error('Error fetching authToken from AsyncStorage:', error);
      }
    };

    fetchCurrentUser();
  }, [user]);

  return currentUser;
};
