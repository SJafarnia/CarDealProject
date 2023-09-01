const { useContext, useState, createContext } = require("react")
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { LoginMutation } from "./graphql";
import { useRouter } from "next/router";
import { link } from "./apllo-client";


const authContext = createContext()

export function AuthProvider({ children }) {
    const auth = userAuthentication()

    return (
        <authContext.Provider value={auth}>
            <ApolloProvider client={auth.createApolloClient()}>
                {children}
            </ApolloProvider>
        </authContext.Provider>
    )
}

export const useAuthentication = () => {
    return useContext(authContext)
}

function userAuthentication() {
    const router = useRouter()
    const [authToken, setAuthToken] = useState(null)
    const [username, setUserName] = useState(null)


    const isSigned = () => {
        return authToken ? true : false
    }

    function createApolloClient() {
        return new ApolloClient({
            link,
            cache: new InMemoryCache(),
            credentials: "include"
        })
    }

    const signIn = async (username, password) => {
        const client = createApolloClient()

        try {
            const { data, error } = await client.mutate({
                mutation: LoginMutation,
                variables: { username, password }
            })

            if (data?.tokenAuth?.token) {
                setAuthToken(data.tokenAuth.token);
                setUserName(data.tokenAuth.user.username);
                // const rawResponse = await fetch("/api/auth/login/",
                //     {
                //         method: "POST",
                //         headers: {
                //             'Accept': 'application/json',
                //             'Content-Type': 'application/json'
                //         },
                //         body: JSON.stringify({ token: data.tokenAuth.token })
                //     })
                // const content = await rawResponse.json();
                localStorage.setItem("SignedIn", "true")
                router.push("/dashboard")
                return "success"
            }
        } catch (err) {
            return "err"
        }
    }
    return {
        signIn,
        createApolloClient,
        isSigned
    }
}