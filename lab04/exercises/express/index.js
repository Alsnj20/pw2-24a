const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})

app.get('/', (request, response)=>{
  response.sendFile(path.resolve(__dirname, 'index.html'));
  response.send('<h1>Hello World 2</h1>');
})
