const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('pub'));

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

app.get('/', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'priv/letterSong.txt'), 'utf8', 
  (err, data) => {
    if(err){
      console.error(err);
      res.status(500).json({error: 'Internal Server Error'});
      return;
    }
    res.json({
      text: data.replace(/\n/g, '<br>'),
    })
  });
})
