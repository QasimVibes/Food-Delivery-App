import ChangePassword from '../screens/changePassword/ChangePassword';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import VerifyOtp from '../screens/verifyOtp/VerifyOtp';
import Profile from '../screens/profile/Profile';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import DeliveryAdress from '../screens/deliveryAdress/DeliveryAdress';
import Orders from '../screens/orders/Orders';
import OrderCancel from '../screens/orderCancel/OrderCancel';
import OrderCancelled from '../screens/orderCancel/OrderCancelled';
import OrderConfirmed from '../screens/placeOrder/OrderConfirmed';
import PlaceOrder from '../screens/placeOrder/PlaceOrder';
import Details from '../screens/details/Details';

export const GUEST_ROUTES = [
  {name: 'Login', component: Login},
  {name: 'Signup', component: Signup},
  {name: 'ForgotPassword', component: ForgotPassword},
  {name: 'VerifyOtp', component: VerifyOtp},
  {name: 'ChangePassword', component: ChangePassword},
];

export const AUTH_ROUTES = [
  {name: 'Profile', component: Profile},
  {name: 'ResetPassword', component: ResetPassword},
  {name: 'DeliveryAdress', component: DeliveryAdress},
  {name: 'Orders', component: Orders},
  {name: 'OrderCancel', component: OrderCancel},
  {name: 'OrderCancelled', component: OrderCancelled},
  {name: 'OrderConfirmed', component: OrderConfirmed},
  {name: 'PlaceOrder', component: PlaceOrder},
  {name: 'Details', component: Details},
];
