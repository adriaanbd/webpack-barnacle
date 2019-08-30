import _ from 'lodash';
import './style.css'; // we can import the css file because of style-loader and css-loader in webpack config file

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());