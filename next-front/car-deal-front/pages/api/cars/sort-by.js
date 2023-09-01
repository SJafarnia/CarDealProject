import { gql } from "@apollo/client"
import client from "@/graphql"

let query = gql`
query Cars($orderBy:String!){
    getAllCars(orderBy:$orderBy){
        id
        brand
        year
        usage
        fuel
        transmission
        price
        model
        carImage{
            url
            isMain
        }
    }
}
`
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { data, loading, error } = await client.query({
                query,
                variables: { orderBy: `${JSON.parse(req.body).value}` },
                fetchPolicy: "no-cache"
            })
            console.log(data)
            return res.status(200).json({ data: data });
        } catch (err) {
            return res.status(501).json({ error: "connnection to DB failed" })
        }
    } else {
        return res.status(405).json({ error: "Method not allowed" })
    }
}