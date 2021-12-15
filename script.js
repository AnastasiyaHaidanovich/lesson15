
'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

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
// const elem = new DomElement(".dialog", "200px", "200px", "grey", "24px");
// const elem2 = new DomElement("#dialog", "100px", "200px", "blue", "24px");
const rectAbs = new DomElement(".rect", "100px", "100px", "aquamarine", "30px");
rectAbs.createElem();
rectAbs.addPosition = function () {
    let newElem = document.querySelector("" + this.selector + "");
    newElem.style.cssText = 'height:' + this.height +'; width: ' + this.width + '; font-size: ' + this.fontSize + '; background-color: ' + this.bg + '; position: absolute';
};

rectAbs.addPosition();
// console.log(elem); 
// elem.createElem();
// elem2.createElem();

let rectangle = document.querySelector(".rect");
let count = 0;
let countV = 0;
document.addEventListener('keydown', function(event) {
    function isKeyDown (){
        if (event.key == 'ArrowLeft') {
            return "Left";
        } else if(event.key == 'ArrowRight'){
            return "Right";
        } else if (event.key == 'ArrowUp'){
            return "Up";
        } else if (event.key == 'ArrowDown'){
            return "Down";
        }
    }
    let duration = isKeyDown();
    if (duration == "Right"){
        count += 10;
        rectangle.style.transform = "translate(" + count + "px," + countV + "px)";
    } else if (duration == "Left"){
        count -= 10;
        rectangle.style.transform = "translate(" + count + "px," + countV + "px)";
    } else if(duration == "Up"){
        countV -= 10;
        rectangle.style.transform = "translate(" + count + "px," + countV + "px)";
    } else if(duration == "Down"){
        countV += 10;
        rectangle.style.transform = "translate(" + count + "px," + countV + "px)";
    }
});