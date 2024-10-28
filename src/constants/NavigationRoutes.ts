import ChangePassword from '../screens/changePassword/ChangePassword';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import VerifyOtp from '../screens/verifyOtp/VerifyOtp';
import Profile from '../screens/profile/Profile';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import DeliveryAddress from '../screens/deliveryAddress/DeliveryAddress';
import Orders from '../screens/orders/Orders';
import OrderCancel from '../screens/orderCancel/OrderCancel';
import OrderCancelled from '../screens/orderCancelled/OrderCancelled';
import OrderConfirmed from '../screens/orderConfirmed/OrderConfirmed';
import PlaceOrder from '../screens/placeOrder/PlaceOrder';
import Details from '../screens/details/Details';
import {
  SETTING,
  FAQ,
  PHONE,
  CARD,
  LOCATION,
  PERSON,
  BAG,
  SECONDARY_HOME,
  DISH,
  SECONDARY_HEART,
  BOARD,
  SECONDARY_HEADPHONE,
} from '../constants/Images';
import Home from '../screens/home/Home';
import BestSeller from '../screens/bestSeller/BestSeller';
import {BottomTabNavigator} from '../navigation/bottomTabNavigator/BottomTabNavigator';
import AddAddress from '../screens/addAddress/AddAddress';
import Contact from '../screens/contact/Contact';
import Discounted from '../screens/discounted/Discounted';
import Faqs from '../screens/faqs/Faqs';
import FoodReview from '../screens/foodReview/FoodReview';
import Foods from '../screens/foods/Foods';
import Recommendation from '../screens/recommendation/Recommendation';
import Launch from '../screens/launch/Launch';

export const GUEST_ROUTES = [
  {name: 'Launch', component: Launch},
  {name: 'Login', component: Login},
  {name: 'Signup', component: Signup},
  {name: 'ForgotPassword', component: ForgotPassword},
  {name: 'VerifyOtp', component: VerifyOtp},
  {name: 'ChangePassword', component: ChangePassword},
];

export const AUTH_ROUTES = [
  {name: 'Home', component: BottomTabNavigator},
  {name: 'Profile', component: Profile},
  {name: 'ResetPassword', component: ResetPassword},
  {name: 'DeliveryAddress', component: DeliveryAddress},
  {name: 'Orders', component: Orders},
  {name: 'OrderCancel', component: OrderCancel},
  {name: 'OrderCancelled', component: OrderCancelled},
  {name: 'OrderConfirmed', component: OrderConfirmed},
  {name: 'PlaceOrder', component: PlaceOrder},
  {name: 'Details', component: Details},
  {name: 'BestSeller', component: BestSeller},
  {name: 'AddAddress', component: AddAddress},
  {name: 'Contact', component: Contact},
  {name: 'Discounted', component: Discounted},
  {name: 'Faqs', component: Faqs},
  {name: 'FoodReview', component: FoodReview},
  {name: 'Foods', component: Foods},
  {name: 'Recommendation', component: Recommendation},
  {name: 'ResetPassword', component: Details},
];

export const DRAWER_FIELDS = [
  {text: 'My Orders', image: BAG, route: 'Orders'},
  {text: 'My Profile', image: PERSON, route: 'Profile'},
  {text: 'Delivery Address', image: LOCATION, route: 'DeliveryAddress'},
  {text: 'Payment Methods', image: CARD, route: 'Home'},
  {text: 'Contact Us', image: PHONE, route: 'Contact'},
  {text: 'Help & FAQ', image: FAQ, route: 'Faqs'},
  {text: 'Settings', image: SETTING, route: 'ResetPassword'},
];

export const TAB_FIELDS = [
  {
    name: 'Home',
    component: Home,
    icon: SECONDARY_HOME,
    iconStyle: {width: 25, height: 22},
  },
  {
    name: 'Orders',
    component: Orders,
    icon: DISH,
    iconStyle: {width: 31, height: 21},
  },
  {
    name: 'Profile',
    component: Profile,
    icon: SECONDARY_HEART,
    iconStyle: {width: 21, height: 18},
  },
  {
    name: 'BestSeller',
    component: BestSeller,
    icon: BOARD,
    iconStyle: {width: 16, height: 25},
  },
  {
    name: 'Contact',
    component: Contact,
    icon: SECONDARY_HEADPHONE,
    iconStyle: {width: 25, height: 24},
  },
];
