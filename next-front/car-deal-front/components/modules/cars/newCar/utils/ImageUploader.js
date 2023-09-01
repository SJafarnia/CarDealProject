import Script from "next/script";
import { useState, useEffect } from 'react';

const imageMimeType = /image\/(png|jpg|jpeg|webp)/i;


export default function ImageUploader({ remover, fileSetter }) {

    const [imgFile, setImgFile] = useState("")
    const [fileName, setFileName] = useState("")
    const [previewClasses, setPreviewClasses] = useState("preview-image")
    const [viewClass, setSetViewclass] = useState("file-upload")
    const [fileSrc, setFileSrc] = useState("")
    const [inpId, setInpId] = useState("fileInput")
    const [showButton, setShowButton] = useState(true)

    const handleFileChange = ({
        target: {
            validity,
            files,
        } }) => {
        if (files && validity.valid) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                // Perform your logic here based on the file type or other criteria
                // if (file.type.includes('image')) {
                if (!file.type.match(imageMimeType)) {
                    alert("فرمت فایل اشتباه است! لطفا فقط عکس انتخاب کنید");
                    return;
                }
                setImgFile(files[0])
                fileSetter(files[0])
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        }
    };

    const inputHandler = async (e) => {
        let src = URL.createObjectURL(e.target.files[0]);
        let id = src.split("-").slice(-1)
        setFileSrc(src);
        setInpId(`fileInput${id}`);
        setFileName(e.target.value);
        setPreviewClasses("!flex preview-image");

        await new Promise(r => setTimeout(r, 190))
        setShowButton(false)
    }


    const removeHandler = (e) => {
        e.preventDefault()
        setSetViewclass("hidden")
        remover(imgFile)
    }


    return (
        <div className={viewClass}>
            <div className="input-group">
                {showButton ? <>
                    <input accept="image/*" className="file-input" type="file" id={inpId} onChange={showButton ? handleFileChange : null} onInput={showButton ? inputHandler : null} />
                    <label htmlFor={inpId} className="browse-btn">Browse files</label>
                </> : null}
            </div>

            <div className={previewClasses} id="previewImage">
                <span className="img"><img id="imageFile" src={fileSrc} /></span>
                <div className="img-details">
                    <h6 className="file-name" id="fileName">{fileName}</h6>
                    <div className="file-progress-bar"></div>
                    <button className="btn-delete" id="deleteImage" onClick={removeHandler}>x</button>

                </div>

            </div>
            {/* <button onClick={handleFormSubmit} className="bg-[#fff] border border-1 inline-block px-3 py-5 rounded-lg cursor-pointer mt-4" id="">save</button> */}
            {/* <Script
                src="/scripts/imageLoader.js"
                strategy="lazyOnload"
            // onLoad={() => console.log("upload scripts loaded")}
            /> */}
        </div>
    )
}
