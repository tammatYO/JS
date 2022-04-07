'use strict'

function DomElements (selector, height, width, bg, fontSize) {
    this.selector = selector 
    this.height = height 
    this.width = width 
    this.bg = bg 
    this.fontSize = fontSize 
}

DomElements.prototype.newElem = function () {
    let element
    if (this.selector[0] === '.') {
        element = document.createElement('div')
        element.className = this.selector.slice(1)
    }
    if (this.selector[0] === '#') {
        element = document.createElement('p')
        element.id = this.selector.slice(1)
    }
    element.style.cssText = `height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;`
    return element;
};

let elementDiv = new DomElements('.block', 300, 300, 'cyan', 16)
let elementP = new DomElements('#best', 600, 100, 'black', 15)

document.body.appendChild(elementDiv.newElem())
document.body.appendChild(elementP.newElem())