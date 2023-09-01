import { onError } from 'apollo-link-error';
import createUploadLink from "apollo-upload-client/public/createUploadLink.js";
import { ApolloLink } from 'apollo-link';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
    if (networkError) console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)})`)
})

const upLink = createUploadLink({
    uri: 'http://127.0.0.1:8000/graphql',
    credentials: "include"
})

export const link = ApolloLink.from([errorLink, upLink])
