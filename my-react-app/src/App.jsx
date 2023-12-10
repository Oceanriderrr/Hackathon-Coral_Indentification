import React, { useState } from 'react';
import DataInput from './components/dataInput';
import DisplayData from './components/displayData';
import './App.css'

function App() {
  const [chatGPTResponse, setChatGPTResponse] = useState(null);

  const handleChatGPTResponse = (data) => {
    setChatGPTResponse(data);
  };

  return (
    <div>
      <h1>Coral Species Recognition</h1>
      <DataInput onChatGPTResponse={handleChatGPTResponse} />
      {chatGPTResponse && <DisplayData chatGPTData={chatGPTResponse} />}
    </div>
  );
}

export default App;




// import React, { useState } from 'react';
// import './App.css'
// import DataInput from './components/dataInput.jsx';
// import DisplayData from './components/displayData.jsx';

// function App() {
//   const [apiData, setApiData] = useState(null);

//   const handleAPIData = (data) => {
//     setApiData(data);
//   }

//   return (
//     <div>
//       <h1>Coral AI model integration</h1>
//       <DataInput onData={handleAPIData} />
//       {/* <DisplayData dataFromAPI={apiData} /> //renders null and lets us see the component */}
//       {apiData && <DisplayData dataFromAPI={apiData} />} //just to see the component */
//     </div>
//   )
// }

// export default App
