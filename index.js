const path = require('path')

function getImg() {
  // 2 is the amount of images
  return Math.floor(Math.random() * 2)
}

exports.decorateConfig = config => {
  const image = getImg()
  const css = `
    body:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.3;
    background-image: url('file://${path.join(__dirname, `images/${image}.gif`)}');
    background-repeat: no-repeat;
    background-position: 0;
    background-size: cover;
    }`

  const newObj = Object.assign({}, config, {
    css: config.css ? config.css + css : css,
    backgroundColor: 'black'
  });

  return newObj;
}