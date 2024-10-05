import React from 'react';
import {Text, View} from 'react-native';
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

function App(): React.JSX.Element {
  return (
    <>
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
    </>
  );
}
export default App;
