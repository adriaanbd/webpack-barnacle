import _ from 'lodash';
import './style.css'; // we can import the css file because of style-loader and css-loader in webpack config file
import Pic from './image.jpg'; // we can import the image because of file-loader in webpack config file
import Data from './data.xml'; // we can import the image because of xml-loader in webpack config file

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = Pic; // The html-loader handles <img src="./my-image.png" />
  myImage.className = 'pic'

  element.appendChild(myImage);

  console.log(Data);

  return element;
}

document.body.appendChild(component());