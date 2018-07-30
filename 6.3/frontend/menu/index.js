'use strict';

import './menu.styl';

import minus from "./minus.svg"

import template from './menu.jade';

let img = document.createElement('img');
img.src = minus;
document.body.appendChild(img);

export default class Menu {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'menu';

    this.elem.innerHTML = template(options);

    this.elem.querySelector('.title').onclick = () => {
      this.elem.classList.toggle('open');
    };
  }
}

