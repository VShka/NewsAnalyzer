'use strict'

export default class DomElement {
  constructor() {

  }

  showDomElement(domElement, cssClass) {
    domElement.classList.remove(`${cssClass}`);
  }

  hideDomElement(domElement, cssClass) {
    domElement.classList.add(`${cssClass}`);
  }

  changeContent(domElement, content) {
    domElement.textContent = `${content}`;
  }

}
