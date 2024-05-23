const { response } = require("express");

const showSong = () => {
  const URL = "http://localhost:3000/songs";
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      document.getElementById("song").innerHTML = data.text;
    })
}