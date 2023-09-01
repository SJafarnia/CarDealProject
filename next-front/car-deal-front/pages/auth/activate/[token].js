import { useMutation } from '@apollo/client';
import { VerifyAccount } from '../../../graphs/graphql';
import client from '@/graphql.js';

export default function Activate({ data }) {

    return (<>
        {data?.success ? <div> ACC VERIFIED </div> : null}
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
    console.log(data.verifyAccount)
    console.log(error)
    // const data = await verify({ variables: { token } })
    // console.log(data)
    if (!data.verifyAccount.success) {
        return {
            notFound: true
        }
    }
    // return {
    //     props: { data: data.verifyAccount },
    // }
    return {
        props: { data: data.verifyAccount }
    }
}