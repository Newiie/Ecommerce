import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerHeader from '../../components/SellerHeader.jsx';
import SellerFooter from '../../components/SellerFooter.jsx';
import DescriptionIcon from '../../assets/description-inactive.png';
import CategoryIcon from '../../assets/index-finger-inactive.png';
import ImageIcon from '../../assets/camera-active.png';
import DeliveryIcon from '../../assets/delivery-box-inactive.png';
import DottedLineIcon from '../../assets/dotted-line-icon.png';
import UploadFileIcon from '../../assets/upload-file-icon.png';
import '../../stylesFolder/Seller/AddProductImagesStyle.css';

function AddProductImages() {
  const navigate = useNavigate(); 

  // Navigation handlers
  const goBack = () => navigate('/add-product-category'); 
  const goNext = () => navigate('/add-product-payment-method'); 

  // State to track uploaded images and filenames
  const [images, setImages] = useState(Array(10).fill(null)); // Holds up to 10 images
  const [fileNames, setFileNames] = useState(Array(10).fill('')); // Holds filenames for each image

  // Handles file input changes to update state with selected images
  const handleImageUpload = (index, event) => {
    const file = event.target.files[0]; // Get selected file
    const updatedImages = [...images]; // Copy current images
    const updatedFileNames = [...fileNames]; // Copy current filenames

    // Update the image preview URL and filename for the specific index
    updatedImages[index] = file ? URL.createObjectURL(file) : null;
    updatedFileNames[index] = file ? file.name : '';

    // Set the new state
    setImages(updatedImages);
    setFileNames(updatedFileNames);
  };

  return (
    <>
      <SellerHeader /> {/* Header component */}
      <div className="add-product-images-container">
        <div className="exclusive">
          {/* Step progress indicator */}
          <div className="product-header-indicator">
            <img src={DescriptionIcon} alt="Description" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={CategoryIcon} alt="Category" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={ImageIcon} alt="Image" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={DeliveryIcon} alt="Delivery" className="step-icon" />
          </div>
          {/* Image upload heading */}
          <div className="images-heading">
            <h2>Add product photos (Max 10)</h2>
          </div>
          {/* Grid layout for uploading photos */}
          <div className="photo-upload-grid">
            {images.map((image, index) => (
              <div key={index} className="photo-wrapper">
                <label className="photo-placeholder">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif" // Accepts only certain image formats
                    className="hidden-input"
                    onChange={(e) => handleImageUpload(index, e)} // Updates state with selected file
                  />
                  {image ? (
                    <img src={image} alt={`Upload ${index + 1}`} className="uploaded-photo" />
                  ) : (
                    <div className="upload-placeholder">
                      <img src={UploadFileIcon} alt="Upload Icon" className="upload-icon" />
                      <span className="upload-text">Upload a photo</span>
                    </div>
                  )}
                </label>
                {/* Displays the file name or "No file chosen" if none */}
                <div className="file-name">{fileNames[index] || 'No file chosen'}</div>
              </div>
            ))}
          </div>
          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <button type="button" className="back-button" onClick={goBack}>Back</button>
            <button type="button" className="next-button" onClick={goNext}>Next</button>
          </div>
        </div>
      </div>
      <SellerFooter /> {/* Footer component */}
    </>
  );
}

export default AddProductImages;
