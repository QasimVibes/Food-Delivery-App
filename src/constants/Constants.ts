import {
  DESSERT,
  DRINK,
  MEAL,
  SNACK,
  VEGAN,
  FACEBOOK,
  WHATSAPP,
  INSTAGRAM,
  GLOBAL,
  HEAD_PHONE,
} from './Images';

export const CATEGORIES = [
  {label: 'Snacks', icon: SNACK},
  {label: 'Meals', icon: MEAL},
  {label: 'Vegan', icon: VEGAN},
  {label: 'Dessert', icon: DESSERT},
  {label: 'Drinks', icon: DRINK},
];

export const CONTACT_DATA = [
  {
    title: 'Customer Service',
    content:
      'If you have any questions, please reach out directly to our customer support.',
    logo: HEAD_PHONE,
  },
  {
    title: 'Website',
    content: 'Visit our website for more information and updates.',
    logo: GLOBAL,
  },
  {
    title: 'WhatsApp',
    content: 'Contact us on WhatsApp for quick assistance.',
    logo: WHATSAPP,
  },
  {
    title: 'Facebook',
    content: 'Visit our Facebook page for updates and support.',
    logo: FACEBOOK,
  },
  {
    title: 'Instagram',
    content: 'Follow us on Instagram for the latest content and stories.',
    logo: INSTAGRAM,
  },
];

export const ROLES_OPTIONS = [
  {label: 'CUSTOMER', value: 'CUSTOMER'},
  {label: 'DELIVERY_PERSON', value: 'DELIVERY_PERSON'},
  {label: 'RESTAURANT_OWNER', value: 'RESTAURANT_OWNER'},
];
