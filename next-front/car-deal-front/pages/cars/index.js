import CarsList from "@/components/templates/CarsList";
import client from "../../graphql";
import { createContext } from "react";
import { AllCars } from "../../graphs/graphql";
import Head from "next/head";

export const CarsListContext = createContext();

export default function Cars({ data }) {
    if (data) {
        return (
            <>
                <Head>
                    <title>
                        Cars
                    </title>
                    <meta name="description" content="car prices"></meta>
                </Head>
                <CarsListContext.Provider value={data}>
                    <CarsList graphData={data} />
                </CarsListContext.Provider>
            </>
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