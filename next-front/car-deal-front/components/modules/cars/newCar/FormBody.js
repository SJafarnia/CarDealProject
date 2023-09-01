import { useState, useRef, useEffect } from "react";
import SpecsForm from "./formParts/SpecsForm";
import ConditionForm from "./formParts/ConditionForm";
import { useSelector } from "react-redux";
import { selectIndex } from "@/redux/features/indexer/indexerSlice";
import ImagesForm from "./formParts/ImagesForm";
import { useMutation } from '@apollo/client';
import { useRouter } from "next/router";
import { UPLOAD_IMAGE, NEW_CAR } from "../graphql";
import DescriptionForm from "./formParts/DescriptionForm";


function FormBody({ parent }) {
    const router = useRouter();
    const pageIndex = useSelector(selectIndex)
    const [formData, setFormData] = useState({})
    const [images, setImages] = useState([])
    const [specFieldsToShow, setSpecFieldsToShow] = useState(0)
    const [conditionFieldsToShow, setConditionFieldsToShow] = useState(0)
    const [myCarId, setMyCarId] = useState("");
    const [graphError, setGraphError] = useState(false)


    const [uploadCar] = useMutation(NEW_CAR);
    const [uploadImage] = useMutation(UPLOAD_IMAGE, { onCompleted: (data) => { } });

    const align = useRef(() => {
        if (parent.current) parent.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    const formSetter = (value) => {
        const key = Object.keys(value)[0]
        if (key) setFormData({ ...formData, [key]: value[key] })
    }

    const submitHandler = async () => {
        try {
            const { brand, model, year, usage, price, fuel, frontChassie, rearChassie, color, description = "", transmission } = formData
            const { loading, error, data } = await uploadCar({ variables: { brand, model, year, usage, price, fuel, transmission, frontChassie, rearChassie, color, description } });
            if (data?.newCar?.id) setMyCarId(data.newCar.id)
            console.log("result : ", data)
            console.log("err", error)
            if (error) {
                setGraphError(true)
                setImages([])
            }
        } catch (err) {
            setGraphError(true)
            setImages([])
        }
    }

    useEffect(() => {
        const secondMutation = async () => {
            if (myCarId) {
                try {
                    let carId = `${myCarId}`
                    const results = images.map(async (file, index) => {
                        let isMain = null
                        if (index == 0) {
                            isMain = true
                        } else {
                            isMain = false
                        }
                        await uploadImage({ variables: { file, carId, isMain } })
                        // setImageData(result.data)
                    })
                    let isSuccess = await Promise.all(results)
                    if (isSuccess) {
                        router.push(`/cars/${carId}`)
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        };
        secondMutation();
    }, [myCarId])


    const formRender = (step) => {
        switch (step) {
            case 1:
                if (specFieldsToShow == 0) align.current();
                return (
                    <SpecsForm fieldsToShow={specFieldsToShow} setFieldsToShow={setSpecFieldsToShow} formData={formData} setFormData={formSetter} />
                )
            case 2:
                if (conditionFieldsToShow == 0 || conditionFieldsToShow == 3) align.current();
                return (
                    <ConditionForm fieldsToShow={conditionFieldsToShow} setFieldsToShow={setConditionFieldsToShow} formData={formData} setFormData={formSetter} />
                )

            case 3:
                // if (imgFieldsToShow == 0) align.current();
                return (
                    <DescriptionForm setFormData={(name, value) => { setFormData({ ...formData, [name]: value }) }} />
                )
            case 4:
                // if (imgFieldsToShow == 0) align.current();
                return (
                    <ImagesForm key={graphError.toString()} images={images} setImages={setImages} submit={submitHandler} graphError={graphError} setGraphError={setGraphError} />
                )
            default:
                return null;
        }
    }

    return (
        <div>
            {formRender(pageIndex)}
        </div>
    )
}

export default FormBody