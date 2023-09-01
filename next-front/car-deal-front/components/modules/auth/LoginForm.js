import { useEffect, useState } from "react"
import Script from "next/script"
import AuthInput from "./AuthInput"
import { useAuthentication } from "@/components/layout/auth/authorization"
import client from "@/graphql"
import { REGISTER } from "@/components/layout/auth/graphql"
import Image from "next/image"

export default function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        password1: '',
        password2: ''
    })
    const [isLogin, setIsLogin] = useState(true)
    const [fullForm, setFullForm] = useState(false)
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { signIn } = useAuthentication()
    // console.log(useAuthentication())


    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError(() => null);
        // console.log("change", error)
    }

    useEffect(() => {
        if ("username" in credentials && "email" in credentials && "password1" in credentials && "password2" in credentials) {
            setFullForm(true)
        }
    },
        [credentials])

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const loginHandler = async (e) => {
        // e.preventDefault();

        setIsLoading((prev) => !prev)

        if (isLogin) {
            if (Object.keys(credentials).length >= 2) {
                const { username, password } = credentials
                const result = await signIn(username, password)
                if (result === "err") setIsLoading((prev) => !prev)
            }
        } else {
            if (fullForm) {
                const { username, email, password1, password2 } = credentials
                try {
                    const { data, error } = await client.mutate({
                        mutation: REGISTER,
                        variables: { email, username, password1, password2 }
                    })
                    if (data.data.register.errors) {
                        const errs = data.data.register.errors
                        setError(errs)
                    }
                    console.log(data, error)
                } catch (err) {
                    setIsLoading((prev) => !prev)
                }
            }
        }
    }

    const stateHandler = (e) => {
        e.preventDefault()
        setIsLogin(!isLogin)
    }

    return (
        <div className="relative pt-[80px] sm:pt-[100px] md:pt-[140px] lg:pt-[170px]">
            <form onSubmit={submitHandler} dir="ltr" id="signUpForm" className="mt-7 xs:max-w-[300px] md:max-w-[650px] lg:max-w-[900px]  p-2 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8" action="#!" noValidate>
                {isLogin ?
                    <section className="h-screen">
                        <div className="container h-full px-6 py-24">
                            <div
                                className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 rounded-lg">
                                    <Image
                                        src="/3626052.jpg"
                                        className="w-full rounded-lg"
                                        alt="login image" 
                                        width={1920}
                                        height={1080}
                                        />
                                </div>
                                <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <AuthInput
                                            type="text" id="usernameInput" autoc="name" placeholder="نام و نام خانوادگی" name="username"
                                            change={changeHandler}
                                        />
                                    </div>

                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <AuthInput
                                            type="password" id="passwordInput" autoc="new-password" placeholder="پسورد" name="password"
                                            change={changeHandler}
                                        />
                                    </div>
                                    <div className="mb-6 flex items-center justify-between">
                                        {/* <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck3"
                                            defaultChecked />
                                        <label
                                            className="inline-block pl-[0.15rem] text-sm hover:cursor-pointer"
                                            htmlFor="exampleCheck3">
                                            مرا به خاطر بسپار
                                        </label>
                                    </div> */}
                                        <a
                                            href="#!"
                                            className="text-primary text-xs transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                        >پسورد خود را فراموش کردید؟</a>
                                    </div>
                                    {isLoading ?
                                        <button
                                            className="inline-block w-full disabled:opacity-75 rounded bg-primary px-7 pb-2.5 pt-3 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            disabled
                                            data-te-ripple-color="light">
                                            <div role="status w-full flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg">
                                                <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                            </div>
                                        </button>
                                        :
                                        <button
                                            onClick={loginHandler}
                                            type="submit"
                                            className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            ورود
                                        </button>
                                    }
                                    <p className="mb-0 mt-2 pt-1 text-xs font-semibold">
                                        <button type="button" onClick={stateHandler}
                                            className="text-danger transition mr-1 duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        >ثبت نام
                                        </button>
                                        حساب کاربری ندارید؟
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <>

                        <div className="p-5">
                            <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">حساب خود را بسازید</p>
                            <AuthInput
                                type="text" autoc="name" placeholder="نام و نام خانوادگی" name="username"
                                change={changeHandler} pattern={null} errs={error}
                            />
                            {/* <AuthInput
                            type="text" autoc="on" placeholder="محل سکونت" name="address"
                            change={changeHandler}
                        /> */}
                            <AuthInput
                                type="email" autoc="email" placeholder="ایمیل" name="email"
                                change={changeHandler} errs={error}
                            />
                            <AuthInput
                                type="password" autoc="new-password" placeholder="پسورد" name="password1"
                                change={changeHandler} pattern={".{7,}"} errs={error}
                            />
                            <AuthInput
                                type="password" placeholder="تایید پسورد" autoc="new-password" name="password2"
                                change={changeHandler} pattern={".{7,}"} errs={error}
                            />
                        </div>
                        {/* <div className="step">
                        <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">کد فعالسازی حساب</p>
                        <AuthInput
                            type="number" autoc="on" placeholder="کد فعالسازی" name="token"
                            change={changeHandler}
                        />
                    </div> */}
                        {/* <div className="step">
                        <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">تایید  شماره همراه</p>
                        <div className="mb-6">
                        </div>
                        <AuthInput
                            type="num" autoc="one-time-come" placeholder="وارد کردن کد" name="mobileCode"
                            change={changeHandler}
                        />
                    </div> */}
                        <div className="form-footer flex justify-center gap-3 p-5">
                            {/* <button type="button" id="prevBtn" className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg">
                            قبل
                        </button> */}
                            {isLoading ?
                                <button type="button" disabled id="" className={`flex-1 disabled:opacity-70 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg`}>
                                    <div role="status w-full flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg">
                                        <svg aria-hidden="true" className="inline w-7 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                    </div>
                                </button>
                                :
                                <button type="button" onClick={loginHandler} id="" className={`flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg`}>
                                    ادامه
                                </button>}

                        </div>
                        <p className="mb-0 mt-2 pt-1 text-xs font-semibold p-5">
                            <button type="button" onClick={stateHandler}
                                className="text-danger transition mr-1 duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            >ورود
                            </button>
                            حساب کاربری دارید؟
                        </p>
                        <Script
                            src="/scripts/form.js"
                            strategy="lazyOnload"
                        />
                    </>

                }
            </form>
        </div>
    )
}