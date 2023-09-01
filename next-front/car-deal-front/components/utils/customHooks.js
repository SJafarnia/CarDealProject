import client from "@/graphql"
import { carViews, newView } from "@/graphs/graphql"
import { useMutation, useQuery } from "@apollo/client"
import { onError } from "apollo-link-error"
import { useEffect } from "react"

export const useCheckView = (carId) => {
    const [checkViews, { data, loading, error }] = useMutation(newView, { onError: () => { return } })

    useEffect(() => {
        const checker = async () => {
            try {
                const response = await fetch('/api/auth/ip');
                const data = await response.json();
                checkViews({ variables: { ip: data.ip, carId: +carId } })
            } catch {
                return
            }
        }
        checker()
        return
    }, [carId])
}

export const useGetViews = (id, setViews) => {

    useEffect(() => {
        const views = async () => {
            try {
                const { data: { getCarViews } } = await client.query({
                    query: carViews, variables: {
                        id: id
                    }
                })
                setViews(getCarViews)
            } catch (err) {
                console.log(err)
                return
            }
        }
        views()
        return
    }, [id])

}