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
