import React from 'react'
import { useState } from 'react';

export default function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };
    const handleUpload = () => {
        if (selectedImage) {
          console.log('Uploading image:', selectedImage);
          const imageUrl = URL.createObjectURL(selectedImage);
          localStorage.setItem('uploadedImage', imageUrl);
          console.log('Image uploaded and saved to local storage:', imageUrl);
        } else {
          console.log('No image selected');
        }
    };
  return (
    <div>
      <input  type="file" accept="image/*" onChange={handleImageChange} />
      <button  onClick={handleUpload}>Upload Image</button>
    </div>
  )
}
