import PostUploadPage from "@/components/templates/PostUploadPage"
import client from "@/graphql";
import { userDetails } from "@/graphs/graphql";

export default function newCarPage() {

    return (
        <PostUploadPage />
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
