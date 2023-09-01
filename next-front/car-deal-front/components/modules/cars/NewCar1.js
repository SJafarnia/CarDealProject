import { useState, useEffect } from "react"
import CarInput from "./car/postComponents/CarInput"
import ImageUploader from "./newCar/utils/ImageUploader"
import Script from "next/script"
import { useMutation } from '@apollo/client';
import { useRouter } from "next/router";
import { UPLOAD_IMAGE, NEW_CAR } from "./graphql";


export default function NewCar1() {
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [files, setFiles] = useState([]);
    //saves the uploaded car's id to add imgs for it
    const [myCarId, setMyCarId] = useState("");
    const [imgExists, setImageExists] = useState(false)
    //checks if user wants to add extra imgs
    const [extraImges, setExtraImges] = useState(['x'])
    //checks if form is in final slide
    const [isFinal, setIsFinal] = useState([]);
    const [errs, setErrs] = useState(null)
    //mutation hooks  
    const [uploadCar] = useMutation(NEW_CAR);
    const [uploadImage] = useMutation(UPLOAD_IMAGE, { onCompleted: (data) => { } });

    const removeItem = (itemToRemove) => {
        const updatedItems = files.filter((item) => item !== itemToRemove);
        setFiles(updatedItems);
    };

    useEffect(() => {
        const filesChecker = () => {

            if (files.length) {
                // setExtraImges([...extraImges, "x"])
                setImageExists(true)
            }
            else if (!files.length) {
                setImageExists(false)
                // console.log("no files")
            }
            // console.log(files)
            // console.log(extraImges)
        }
        filesChecker();
    }, [files]);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const x = e.target.getAttribute("data-final");
        if (x) {
            e.preventDefault()
            setIsFinal([...isFinal, "X"])
        }
        if (x && isFinal.length > 0) {
            // const inputData = JSON.stringify(formData)
            const { brand, model, year, usage, price, fuel } = formData
            try {
                const { loading, error, data } = await uploadCar({ variables: { brand, model, year, usage, price, fuel } });
                setMyCarId(data.newCar.id)
                console.log("result : ", data)
                console.log("err", error)
                if (error) {
                    setErrs(result.error)
                    console.log("result err", result.error)
                }
            } catch (err) {
                console.log("catched err", err)

            }
        }
    }

    useEffect(() => {
        const secondMutation = async () => {
            if (myCarId) {
                try {
                    let carId = `${myCarId}`
                    const results = files.map(async (file, index) => {
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
    }, [myCarId]);

    const addHandler = (e) => {
        e.preventDefault(),
            setExtraImges([...extraImges, "x"])
    }
    // console.log(formData)

    return (
        <form dir="ltr" id="signUpForm" className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8" action="#!">
            <div className="form-header flex gap-3 mb-4 text-xs text-center">
                <span className="stepIndicator flex-1 pb-8 relative">مشخصات فنی</span>
                <span className="stepIndicator flex-1 pb-8 relative">تجهزات</span>

            </div>
            <div className="step">
                <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">مشخصات فنی خودرو را وارد کنید</p>
                <CarInput
                    type="text" placeholder="سازنده" name="brand"
                    change={changeHandler} pattern={null}
                />
                <CarInput
                    type="text" placeholder="مدل" name="model"
                    change={changeHandler} pattern={null}
                />
                <CarInput
                    type="number" placeholder="سال تولید" name="year"
                    change={changeHandler} pattern={"\d+"}
                />
                <CarInput
                    type="number" placeholder="کارکرد" name="usage"
                    change={changeHandler} pattern={null}
                />
                <CarInput
                    type="number" placeholder="قیمت" name="price"
                    change={changeHandler} pattern={null}
                />
                <CarInput
                    type="text" placeholder="سوخت" name="fuel"
                    change={changeHandler} pattern={null}
                />

            </div>

            <div dir="rtl" className="step">
                <div className="flex flex-col">
                    <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">افزودن عکس</p>
                    {extraImges.length ? extraImges.map((item, index) => (<ImageUploader key={index} remover={file => removeItem(file)} fileSetter={file => setFiles([...files, file])} />)) : null}
                    {imgExists ? <button dir="rtl" onClick={addHandler} className="rounded-full bg-indigo-600 w-8 h-8 text-white text-lg">+</button> : null}
                </div>
            </div>

            <div className="form-footer flex gap-3 mt-6">
                <button type="button" id="prevBtn" className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg" >Previous</button>
                {isFinal.length > 0 ? <button type="button" onClick={submitHandler} className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg" >Submit</button> : <button type="button" id="nextBtn" onClick={submitHandler} className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg" >Next</button>}
                {/* <button type="button" id="nextBtn" onClick={submitHandler} className="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg" >Next</button> */}
            </div>
            <Script
                src="/scripts/form.js"
                strategy="lazyOnload"
                onLoad={() => console.log("login loaded ")}
            />
        </form>

    )
}