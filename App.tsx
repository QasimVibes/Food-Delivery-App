import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/login/Login';
import Signup from './src/screens/signup/Signup';
import ResetPassword from './src/screens/resetPassword/ResetPassword';
import ForgotPassword from './src/screens/forgotPassword/ForgotPassword';
import Profile from './src/screens/profile/Profile';
import DeliveryAdress from './src/screens/deliveryAdress/DeliveryAdress';
import Orders from './src/screens/orders/Orders';
import OrderCancel from './src/screens/orderCancel/OrderCancel';
import OrderCancelled from './src/screens/orderCancel/OrderCancelled';
import OrderConfirmed from './src/screens/placeOrder/OrderConfirmed';
import PlaceOrder from './src/screens/placeOrder/PlaceOrder';
import Details from './src/screens/details/Details';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from 'react-native-onboarding-swiper';
import {ApolloProvider} from '@apollo/client';
import client from './src/graphql/client';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <ApolloProvider client={client}>
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <ResetPassword /> */}
        {/* <ForgotPassword /> */}
        {/* <Profile /> */}
        {/* <DeliveryAdress /> */}
        {/* <Orders /> */}
        {/* <OrderCancel /> */}
        {/* <OrderCancelled /> */}
        {/* <OrderConfirmed /> */}
        {/* <PlaceOrder /> */}
        <Details />
      </ApolloProvider>
    </>
  );
}

export default App;
