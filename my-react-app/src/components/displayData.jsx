
async function DisplayData({ chatGPTData }) {
  // const response = await fetch('http://localhost:3000/api/coral-info');
  // console.log('RESPONSE', await response);
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