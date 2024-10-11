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
