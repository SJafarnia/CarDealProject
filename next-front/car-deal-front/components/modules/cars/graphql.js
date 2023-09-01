import { gql } from '@apollo/client';

export const UPLOAD_IMAGE = gql`
        mutation Upload($file: Upload!, $carId: String!, $isMain:Boolean!){
        imageUpload(file:$file, carId:$carId, isMain:$isMain){
            success
            carId
            isMain
        }
    }`;

export const NEW_CAR = gql`
    mutation Car($brand: String!, $model: String!, $description:String! ,$year: Int!, $usage: Int!, $price: Int!, $fuel: String!, $transmission:String!, $frontChassie: String!, $rearChassie: String!, $color: String!){
        newCar(brand:$brand, model:$model, year:$year, description:$description, usage:$usage, price:$price, fuel:$fuel, transmission:$transmission,frontChassie:$frontChassie, rearChassie:$rearChassie, color:$color){
        id
    }
}`;
