import CarsList from "@/components/templates/CarsList";
import client from "../../graphql";
import { createContext } from "react";
import { AllCars } from "../../graphs/graphql";

export const CarsListContext = createContext();

export default function Cars({ data }) {
    if (data) {
        return (
            <CarsListContext.Provider value={data}>
                <CarsList graphData={data} />
            </CarsListContext.Provider>
        )
    }
    return <CarsList />
}


export async function getServerSideProps() {
    try {
        const { data, loading, error } = await client.query({
            query: AllCars,
            context: {
                fetchOptions: {
                    next: { revalidate: 5 },
                },
            }
        })

        if (data) {
            return {
                props: { "data": (data.getAllCars) }
            }
        }
        if (loading) {
            return {
                props: { "data": "loading" }
            }
        }
    } catch (err) {
        return {
            // notFound: true
            props: { "data": "" }
        }
    }
}