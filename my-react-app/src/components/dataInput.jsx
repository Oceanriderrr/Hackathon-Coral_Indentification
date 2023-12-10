import React, { useState } from 'react';

function DataInput({ onChatGPTResponse }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      // Prepare data to send to ChatGPT API
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Send image data to ChatGPT's API endpoint
      try {
        const response = await fetch('CHATGPT_API_ENDPOINT', {
          method: 'POST',
          body: formData,
          // Add necessary headers like Authorization, content type, etc.
        });

        const data = await response.json();
        // Handle the data received from ChatGPT's API
        console.log('Data from ChatGPT:', data);
        // Pass data to parent component (App.jsx)
        onChatGPTResponse(data);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DataInput;




// import React, { useState } from 'react';

// function DataInput() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (selectedFile) {
//       // Perform API request with the selected file
//       const formData = new FormData();
//       formData.append('image', selectedFile);

//       // Use fetch or any HTTP library to send the file to your AI model API
//       try {
//         const response = await fetch('AI_MODEL_API_ENDPOINT', {
//           method: 'POST',
//           body: formData,
//           // Add necessary headers like Authorization, content type, etc.
//         });

//         const data = await response.json();
//         // Handle the data received from the API as needed
//         console.log('Data from AI model:', data);
//         // Update state or pass this data to displayData component
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     } else {
//       console.error('No file selected');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default DataInput;










// //original frontend design
// // import React from 'react'
// // import { useState } from 'react';


  

// const DataInput = () => {
//   return (
//     <div>
//       <p>Upload your photo here</p>
//       <textarea placeholder="Image URL"/>
//       <br></br>

//       <button type="submit">Submit</button>
//     </div>
    
//   )
// }

// export default DataInput;