import React, { useState } from 'react';

const ImageUploader = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        // Use FileReader to read the selected file and convert it to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          onUpload(base64String);
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error('Error reading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Submit Image of Coral</button>
    </div>
  );
};

export default ImageUploader;
