import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://restaurant-backend-app-server-production-9d02.up.railway.app/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNtMTh4cDN6azAwMDBqeWIxYW9yYTZ5MnoiLCJyb2xlIjoiQ1VTVE9NRVIiLCJpYXQiOjE3Mjg1NTU2ODQsImV4cCI6MTcyOTE2MDQ4NH0.wgK1eXtkrGvHtmZ1-_kWBO2mumHomJiZVIaEhrIMXO0';

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
