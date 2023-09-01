import { gql } from "@apollo/client";

export const LoginMutation = gql`
mutation tokenAuth($username: String!, $password: String!){
    tokenAuth(username: $username, password: $password){
        success
        errors
        token
        refreshToken
        user{
            username
        }
    }
}
`

export let REGISTER = gql`mutation register($username: String!, $email: String!, $password1: String!, $password2: String!) {
    register(
        email:$email,
        username:$username,
        password1:$password1,
        password2:$password2){
        success
        errors
        token
        refreshToken
        }
}`