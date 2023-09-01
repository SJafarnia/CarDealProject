import NewCar from "../modules/cars/newCar/NewCar";
import ProtectedRoute from "../modules/auth/ProtectedRoute";
import Navbar from "../layout/nav/Navbar";

export default function PostUploadPage() {
    return (
        <>
            <Navbar main="false"/>
            <NewCar />
        </>
    )
}