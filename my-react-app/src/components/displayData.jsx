import React from 'react';

function DisplayData({ chatGPTData }) {
  return (
    <div>
      {/* Display data received from ChatGPT */}
      <h2>ChatGPT Response:</h2>
      <pre>{JSON.stringify(chatGPTData, null, 2)}</pre>
      {/* Format and display data as needed */}
    </div>
  );
}

export default DisplayData;




// import React from 'react';

// function DisplayData({ dataFromAPI }) {
//   return (
//     <div>
//       {/* Display data from the API */}
//       <h2>AI Model Output:</h2>
//       <pre>{JSON.stringify(dataFromAPI, null, 2)}</pre>
//       {/* You might format and display the data more appropriately */}
//     </div>
//   );
// }

// export default DisplayData;








// import React from 'react'

// const DisplayData = () => {
//   return (
//     <div>
//         <p>Here we will display what ChatGPT gives us</p>
        
//     </div>
//   )
// }

// export default DisplayData