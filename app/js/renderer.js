const path = require('path');
const os = require('os');

const form = document.getElementById('image-form');
const img = document.getElementById('img');
const slider = document.getElementById('slider');
const outputPath = document.getElementById('output-path');

outputPath.innerText = path.join(os.homedir(), 'imageshrink');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const imgPath = img.files[0].path;
  const imgQuality = slider.value;

  console.log(imgPath, imgQuality);
});
