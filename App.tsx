import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from 'react-native-onboarding-swiper';
import {ApolloProvider} from '@apollo/client';
import client from './src/graphql/client';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/stackNavigator/StackNavigator';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ApolloProvider>
        <Toast />
      </Provider>
    </>
  );
}

export default App;
