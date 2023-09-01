import Script from "next/script"
import LoginForm from "../modules/auth/LoginForm"
import Navbar from "../layout/nav/Navbar"


export default function LoginPage() {
    return (
        <>
            <Navbar main="false" />
            <LoginForm />
            {/* <Script
                src="/scripts/form.js"
                strategy="lazyOnload"
            /> */}
        </>
    )
}