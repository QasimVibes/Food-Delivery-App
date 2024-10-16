import {useNavigation, NavigationProp} from '@react-navigation/native';
import {NavigatorTypes} from '../types/types';

const useTypeNavigation = () => useNavigation<NavigationProp<NavigatorTypes>>();

export default useTypeNavigation;
