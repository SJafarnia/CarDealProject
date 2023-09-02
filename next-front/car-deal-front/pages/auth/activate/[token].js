import { useMutation } from '@apollo/client';
import { VerifyAccount } from '../../../graphs/graphql';
import client from '@/graphql.js';

export default function Activate() {
    return (
        <>
            <div> ACCOUNT NOT VERIFIED </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { params: { token } } = context
    console.log(token)

    // const [verify] = useMutation(VerifyAccount)
    const { data, loading, error } = await client.mutate({
        mutation: VerifyAccount,
        variables: { token }
    })
    // const data = await verify({ variables: { token } })
    if (!data.verifyAccount.success) {
        return {
            notFound: true
        }
    }
    if (data) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return {
        props: { data: "" },
    }

}