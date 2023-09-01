import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/public/createUploadLink.js";
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link';
import { setContext } from '@apollo/client/link/context';


const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
    if (networkError) console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)})`)
})

const dlink = createUploadLink({
    uri: 'http://127.0.0.1:8000/graphql',
})

// const authLink = setContext((_, { headers }) => {
//     // Get the JWT token from the cookie
//     const token = document.cookie.replace(
//         /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
//         '$1'
//     );

//     // Add the JWT token to the headers
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : '',
//         },
//     };
// });

// const xlink = authLink.concat(dlink)

const link = ApolloLink.from([errorLink, dlink])

const client = new ApolloClient({
    link, // `httpLink` must be the last
    cache: new InMemoryCache(),
    credentials: "include"
})

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: createUploadLink({ uri: 'http://127.0.0.1:8000/graphql' })
// })


export default client;