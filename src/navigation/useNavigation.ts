import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useNavigation = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

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
  }, []);

  return currentUser;
};
