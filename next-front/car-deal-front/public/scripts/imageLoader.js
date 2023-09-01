var fileInput = document.getElementsByClassName('file-input');
var deleteImage = document.getElementsByClassName('btn-delete');
var previewImage = document.getElementsByClassName('preview-image');
var fileName = document.getElementsByClassName('file-name');

// image preview
function fileUpload() {
    //it will show image path
    let text = fileInput.value;
    fileName.innerHTML = text;

    //show the image
    previewImage.style.display = 'flex';
    imageFile.src = window.URL.createObjectURL(fileInput.files[0]);
}

// delete image
deleteImage.addEventListener('click', function () {
    fileInput.value = null;
    previewImage.style.display = "none";
});

fileInput.addEventListener("input", ()=>fileUpload())