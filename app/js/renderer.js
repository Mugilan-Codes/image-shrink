const path = require('path');
const os = require('os');

const outputPath__span = document.getElementById('output-path');

outputPath__span.innerText = path.join(os.homedir(), 'imageshrink');
