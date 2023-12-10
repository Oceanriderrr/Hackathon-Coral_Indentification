const express = require('express');
const app = express();
const port = 3000;
const OpenAI = require('openai')
const fs = require('fs');


// Define the endpoint and associate it with your function
app.get('/api/coral-info', defineCoral);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const openai = new OpenAI({ apiKey: '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' });

async function defineCoral() {
  const imagePath = 'coral.png';
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString('base64');

  const dataUri = `data:image/jpeg;base64,${base64Image}`;
  const response = await openai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'What type of coral is this?' },
          {
            type: 'image_url',
            image_url: {
              url: `${dataUri}`
            },
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
}
