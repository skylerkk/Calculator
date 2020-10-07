// let body = document.getElementById('body');
// body.setAttribute('class', 'container border mt-5 pt-3')
// function generateElement(type, id, classlist, parent, text = false) {

//     let newElement = document.createElement(type);
//     newElement.id = id;
//     let para = document.createTextNode(text);
//     if (text !== false) {
//         newElement.appendChild(para);
//     }
//     newElement.setAttribute('class', classlist);
//     parent.append(newElement);
//     return newElement;
// }

// let displayRow = generateElement('div', 'row', 'row', body);
// generateElement('div', 'display', 'col-12 py-4', row)
// generateElement('div', 'clear', 'col-3 text-center py-4 border', row, 'AC');
// generateElement('div', '+/-', 'col-3 text-center py-4 border', row, '+/-');
// generateElement('div', '%', 'col-3 text-center py-4 border', row, '%');
// generateElement('div', '/', 'col-3 text-center py-4 border', row, '/');
// generateElement('div', '7', 'col-3 text-center py-4 border', row, '7');
// generateElement('div', '8', 'col-3 text-center py-4 border', row, '8');
// generateElement('div', '9', 'col-3 text-center py-4 border', row, '9');
// generateElement('div', 'x', 'col-3 text-center py-4 border', row, 'x');
// generateElement('div', '4', 'col-3 text-center py-4 border', row, '4');
// generateElement('div', '5', 'col-3 text-center py-4 border', row, '5');
// generateElement('div', '6', 'col-3 text-center py-4 border', row, '6');
// generateElement('div', '-', 'col-3 text-center py-4 border', row, '-');
// generateElement('div', '1', 'col-3 text-center py-4 border', row, '1');
// generateElement('div', '2', 'col-3 text-center py-4 border', row, '2');
// generateElement('div', '3', 'col-3 text-center py-4 border', row, '3');
// generateElement('div', '+', 'col-3 text-center py-4 border', row, '+');
// generateElement('div', '0', 'col-6 text-center py-4 border', row, '0');
// generateElement('div', '.', 'col-3 text-center py-4 border', row, '.');
// generateElement('div', '=', 'col-3 text-center py-4 border', row, '=');

class Calculator {
    constructor() {
        this.iconArray = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    }
    display() {
        let body = document.getElementById('body');
        body.setAttribute('class', 'container border mt-5 pt-3');
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        let display = document.createElement('div');
        display.setAttribute('class', 'col-12 text-right border py-5');
        for (let i = 0; i < this.iconArray.length; i++) {
            let btn = new Button(this.iconArray[i]);

            row.appendChild(btn);
        }
    }
}

class Button {
    constructor(type) {
        this.type = type
    }
    addEvent() {

    }
}

class Operator extends Button {
    constructor(element) {
        super(element, 'operator');
    }
}

class Number extends Button {
    constructor(element) {
        super(element, 'number');
    }
}

var c = new Calculator();
c.display();
