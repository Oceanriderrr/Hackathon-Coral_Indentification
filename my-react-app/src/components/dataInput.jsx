import React from 'react'
import { useState } from 'react';


  

const DataInput = () => {
  return (
    <div>
      <p>Data input</p>
      <input placeholder="Scientific Name"/>
      <br></br>
      <input type="file" />
      <input type="text" placeholder="enter the URL of the picture" />
      
      <br></br>
      <textarea placeholder="Description of Coral"/>
      <br></br>

      <button type="submit">Submit</button>
    </div>
    
  )
}

export default DataInput;