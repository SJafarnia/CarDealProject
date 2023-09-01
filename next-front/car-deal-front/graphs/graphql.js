import { gql } from '@apollo/client';

export const VerifyAccount = gql`
mutation verifyAccount($token: String!){
    verifyAccount(token: $token){
        success
        errors
        }
    }`

export const userDetails = gql`
query userDetails{
    userDetails{
        id 
        username
        email
    }
}`

export const AllCars = gql`
query Cars{
    getAllCars{
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
export const newView = gql`
mutation newView($carId: Int!, $ip: String!){
    createView(carId:$carId,  ip:$ip){
        success
    }
}`

export const carViews = gql`
query views($id: Int){
    getCarViews(id:$id)
}`