import React, {useState} from "react";
import noImage from '../../Assets/noImageAvailable.jpg';
function ImageUploader({setFile,file}) {

   function handleChange(event) {
       if(event.target.files[0]){
        setFile(URL.createObjectURL(event.target.files[0]))
       }else{
        setFile(null)
       }
      }
    return (
        <div>
            <img style={{ width:150 , height:150 , marginBottom:20}} src={file ? file : noImage} />
            <input type="file" accept="image/*" onChange={(e) =>handleChange(e)} />
        </div>
    );
}

export default ImageUploader;
