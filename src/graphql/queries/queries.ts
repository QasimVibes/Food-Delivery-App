import {gql} from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetData {
    getCurrentUser {
      address
      createdAt
      dateOfBirth
      email
      fullname
      id
      imageUrl
      mobileNumber
      updatedAt
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation SignUpUser(
    $mobileNumber: String!
    $email: String!
    $dateOfBirth: DateTimeISO!
    $password: String!
    $fullname: String!
  ) {
    signup(
      mobileNumber: $mobileNumber
      email: $email
      dateOfBirth: $dateOfBirth
      password: $password
      fullname: $fullname
    ) {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($identifier: String!, $password: String!) {
    login(identifier: $identifier, password: $password)
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const VERIFY_OTP = gql`
  mutation VerifyOtp($email: String!, $otp: String!) {
    verifyOtp(email: $email, otp: $otp)
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($email: String!, $otp: String!, $password: String!) {
    changePassword(email: $email, otp: $otp, password: $password)
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($password: String!) {
    resetPassword(password: $password)
  }
`;
