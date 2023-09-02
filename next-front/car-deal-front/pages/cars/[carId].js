import Navbar from "@/components/layout/nav/Navbar"
import CarDetails from "@/components/templates/CarDetails"
import client from '@/graphql'
import { gql } from '@apollo/client';
import { data } from "autoprefixer";
import Head from "next/head";
import { createContext } from "react";

export const CarDetailContext = createContext()

export default function CarDetailPage({ data }) {
    console.log(params)
    if (data) {
        return (
            <>
                <Head>
                    <title>Car {data.id}</title>
                </Head>
                <div className='bg-[#eff3f6]'>
                    <Navbar main="false" />
                    {/* {data ? CarDetailContext: } */}
                    <CarDetailContext.Provider value={data}>
                        <CarDetails carId={data.id} />
                    </CarDetailContext.Provider>
                </div>
            </>
        )
    }
    return (
        <div>x</div>
    )

};


export async function getStaticPaths() {

    const query = gql`
query Cars{
  getAllCars{
    id
  }
}
`
    try {
        const { data, loading, error } = await client.query({
            query,
        })
        const cutData = data.getAllCars
        // console.log(data.getAllCars.slice(0,2))
        const paths = cutData.map(item => ({
            params: { carId: `${item.id}` },
        }))

        // const paths = 
        // [{params:{ carId : "1"}}, {params:{ carId : "2"}}]

        return {
            paths,
            fallback: "blocking"
        };
    } catch {
        return {
            paths: [],
            fallback: "blocking"
        }
    }
}


export async function getStaticProps(context) {

    const { params: { carId } } = context
    // const { req } = context
    // console.log(req)

    // const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress; 
    const q = gql`
    query Car{
        getCar(id:${carId}){
            id
            brand
            year
            usage
            fuel
            description
            transmission
            price
            color
            model
            seller{
                email
                phone
            }
            carImage{
                car{id}
                id
                url
                isMain
            }
                }
        }`

    try {
        const { data, loading, error } = await client.query({
            query: q,
            fetchPolicy: "network-only",
        })
        if (data) {
            return {
                props: { data: data.getCar },
                revalidate: 3 * 60 * 60
            }
        }
    } catch (err) {
        return {
            notFound: true
        }
    }

    return {
        notFound: true
    }

}