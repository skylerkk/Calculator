//Calculator Class
class Calculator {

    /*
        constructor holds calcIcons, numIcons, opIcons and uses that to set the buttons
        sets calcButtons equal to empty array to push all the objects taht get created by the buttons
        make display text, lastnumber, lastoperator, and current number to use later
    */
    constructor() {
        this.calcIcons = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
        this.numIconArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
        this.opIconArr = ['+', '-', '=', '/', '%', '+/-', 'x', 'AC'];
        this.calcButtons = [];
        this.displayText = null;
        this.lastNumber = '';
        this.currentNumber = '0';
        this.lastOperator = null;
        this.dot = false;

        this.addNum = this.addNum.bind(this);
        this.operate = this.operate.bind(this);
    }

    addNum(num){
        if (this.currentNumber === '0' && num !== '.'){
            this.currentNumber = num;
            this.update();
        }
        else if(num === '.'){
            if(this.dot === false){
                this.currentNumber += num;
                this.update();
                this.dot = true;
            }
        }
        else if(this.currentNumber.length < 9){
            this.currentNumber += num;
            this.update();
        }
    }

    operate(num){
        console.log('hit');
    }


    //init makes the display and button objects
    init() {
        //get the body div and set classes to it
        let body = document.getElementById('body');
        body.setAttribute('class', 'container border mt-5');

        //make row element set the class to it
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        //make a div called display and set its col size to 12 and text to right
        //make displayText equal to this display and set it to current number then put it on the row
        let display = document.createElement('div');
        display.setAttribute('class', 'col-12 text-right border py-5');
        this.displayText = display;
        this.displayText.innerHTML = this.currentNumber;
        row.appendChild(display);

        //loop through each calcIcons
        for (let i = 0; i < this.calcIcons.length; i++) {

            //loop thorugh all numIcons
            for (let j = 0; j < this.numIconArr.length; j++) {
                //if the calcIcon is equal to the numIconArr at current index then make a number button of that type 
                if (this.calcIcons[i] === this.numIconArr[j]) {
                    let btn = new Number(this.calcIcons[i], this.addNum);
                    btn.addButton();

                    //append that to the row and push it to the calcButtons array
                    row.appendChild(btn.col);
                    this.calcButtons.push(btn);
                }
            }

            //loop through all opIcons
            for (let j = 0; j < this.opIconArr.length; j++) {
                //if the calcIcon is equal to the numIconArr at current index then make a operator button of that type 
                if (this.calcIcons[i] === this.opIconArr[j]) {
                    let btn = new Operator(this.calcIcons[i], this.operate);
                    btn.addButton();

                    //append that to the row and push it to the calcButtons array
                    row.appendChild(btn.col);
                    this.calcButtons.push(btn);
                }
            }
        }
        //append the row to  the body
        body.appendChild(row);
    }

    //updates the display with the currentNumber
    update() {
        this.displayText.innerHTML = this.currentNumber;
    }

}


//class operator
class Operator {

    //constructor taht takes in type
    constructor(type, method) {
        this.type = type;
        this.col = null;
        this.checker = this.checker.bind(this);
        this.operate = method;
    }

    //add a button
    addButton() {
        //make a div that becomes a column clsas and set the id to be this type
        let col = document.createElement('div');
        col.setAttribute('class', 'col-3 text-center border py-3');
        col.setAttribute('id', this.type);
        //make a paragraph and set its text to the calculator icon
        let para = document.createElement('p');
        para.innerHTML = this.type;

        //append the paragraph to the column
        col.appendChild(para);

        //add an eventlistneer that uses calc.calledMethod as its function when it is clicked
        col.addEventListener('click',this.checker);
    
        //this.col and col
        this.col = col;
    }

    checker(){
        //console.log(this.type);
        this.operate(this.type);
    }
}

class Number {

    //constructor taht takes in type
    constructor(type, method) {
        this.type = type;
        this.col = null;
        this.checker = this.checker.bind(this);
        this.addNumber = method;
    }

    //add a button 
    addButton() {
        //make a div that becomes a column clsas and set the id to be this type
        let col = document.createElement('div');
        //if the type is 0 then make it col-6
        if (this.type === '0') {
            col.setAttribute('class', 'col-6 text-center border py-3');
        }
        //else it is col-3
        else {
            col.setAttribute('class', 'col-3 text-center border py-3');
        }
        col.setAttribute('id', this.type);
        
        //make a paragraph and set its text to the calculator icon
        let para = document.createElement('p');
        para.innerHTML = this.type;

        //append the paragraph to the column
        col.appendChild(para);

        //add an eventlistneer that uses calc.calledMethod as its function when it is clicked
        col.addEventListener('click', this.checker);

        //this.col and col
        this.col = col;
    }

    checker(){
        this.addNumber(this.type);
    }
}

var calc = new Calculator();
calc.init();