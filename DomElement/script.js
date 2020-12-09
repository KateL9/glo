function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElem = function(selector) {
        first = this.selector.slice(0, 1);
        let selectorName = this.selector.slice(1);
        if (first == '.') {
            //create div .block 
            document.body.insertAdjacentHTML("afterbegin", `<div class=${selectorName}>
                <strong>Всем привет!</strong></div>`);
            div = document.querySelector('div');
            div.style.cssText = `
            height: ${this.height}px;
            background-color: ${bg};
            width: ${width}px;
            fontSize: ${bg};`;
        } else if (first == '#') {
            //create p #best
            document.body.insertAdjacentHTML("afterbegin", `<p id=${selectorName}>
            New paragraph </p>`);
            let p = document.querySelector('p');
            p.style.cssText = `
            height: ${this.height}px;
            background-color: ${this.bg};
            width: ${this.width}px;
            fontSize: ${this.fontSize} ;`;
        }
    }
};

let obj = new DomElement('#', '20', '300', 'red', 'large');
obj.createElem();