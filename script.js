
'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};
DomElement.prototype.createElem = function () {
    if(this.selector.startsWith(".")){
        console.log("ay");
        let newElem = document.createElement("div");
        let className = this.selector.slice(1);
        newElem.classList.add(className);
        console.log(newElem);
        newElem.style.cssText = 'height:' + this.height +'; width: ' + this.width + '; font-size: ' + this.fontSize + '; background-color: ' + this.bg;
        newElem.innerText = "Это блок";
        document.body.appendChild(newElem);
    } else if (this.selector.startsWith("#")){
        console.log("hi");
        let newElem = document.createElement("p");
        let idName = this.selector.slice(1);
        newElem.setAttribute("id", idName);
        console.log(newElem);
        newElem.style.cssText = 'height:' + this.height +'; width: ' + this.width + '; font-size: ' + this.fontSize + '; background-color: ' + this.bg;
        newElem.innerText = "Это параграф";
        document.body.appendChild(newElem);
    }
        
    
};
const elem = new DomElement(".dialog", "200px", "200px", "grey", "24px");
const elem2 = new DomElement("#dialog", "100px", "200px", "blue", "24px");
console.log(elem);
elem.createElem();
elem2.createElem();