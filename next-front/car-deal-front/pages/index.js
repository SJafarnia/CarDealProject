import HomePage from '@/components/templates/HomePage'
import client from "../graphql";
import { createContext } from "react";
import Navbar from '@/components/layout/nav/Navbar';
import { AllCars } from '@/graphs/graphql';

export const DataContext = createContext();

export default function Home({ data }) {
  // if (data) {
  return (
    <DataContext.Provider value={data}>
      <HomePage />
    </DataContext.Provider>
  )
  // }
  // return <Navbar main="true" />
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
    console.log(err)
    return {
      props: { "error": "JSON.stringify(err)" }
    }
  }
}