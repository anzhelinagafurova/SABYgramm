const createPictureBlob = (letter) => {
    const newPhotoSvg = 
      `<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" version="1.1">
      <circle cx="37" cy="37" r="37" fill="white"></circle>
    <text x="18" y="60" font-size="60" font-family="Roboto, sans-serif" fill="#738DED">${letter}
          </text>  
    </svg>`
    const blob= new Blob([newPhotoSvg], {type: 'image/svg+xml'}); 
    return createReader(blob);
}

const readPhoto = (e) => {
    return createReader(e.target.files[0])
}

const createReader = (value) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => {
            resolve(reader.result)
        }
    })
}
export{
    createPictureBlob, readPhoto
}