import { userDetails } from "@/graphs/graphql";
import { useQuery } from "@apollo/client";
import { useAuthentication } from "@/components/layout/auth/authorization";

export default function Dashboard() {
    const { data, loading, error } = useQuery(userDetails)

    const { isSigned } = useAuthentication()
    // console.log(isSigned)

    if (loading) {
        return (
            <p>LOADING...</p>
        )
    }
    return (
        <p>{isSigned ? "signed" : "not signed"}  {data?.userDetails.username}</p>
    )
}