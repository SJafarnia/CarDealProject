import PostUploadPage from "@/components/templates/PostUploadPage"
import client from "@/graphql";
import { userDetails } from "@/graphs/graphql";
import Head from "next/head";

export default function newCarPage() {

    return (
        <>
            <Head>
                <title>
                    Post your car
                </title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <PostUploadPage />
        </>
    )
}

export async function getServerSideProps() {
    try {
        const { data, error } = client.query({
            query: userDetails
        })
        if (data?.userDetails) {
            return {
                props: { data: data.userDetails }
            };
        } else if (error) {
            return {
                notFound: true
            }
        } else {
            return {
                redirect: {
                    permanent: false,
                    destination: "/auth/login",
                }
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
}
