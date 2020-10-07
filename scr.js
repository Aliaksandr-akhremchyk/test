// function func1(){	
//     let b = document.getElementById("history");
//     let a = document.getElementById("history").innerHTML
//      if (a === "0") {
//          b.innerHTML = "1";
//      } else {
//         b.innerHTML = a + "1";
//      }
        
//     }
// function func2(){	
//         let b = document.getElementById("history");
//         let a = document.getElementById("history").innerHTML
//          if (a === "0") {
//              b.innerHTML = "2";
//          } else {
//             b.innerHTML = a + "2";
//          }
            
//     }

function funcC(){
    let b = document.getElementById("history");
    let a = document.getElementById("screen");
    b.innerHTML = "";
    a.value = "";
}
function funcDel(){
    let b = document.getElementById("screen");
    let a = document.getElementById("screen").value
    let c = a.substring(0, a.length - 1)
    b.value = c
}
function add(a, b){
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
function sqr(a) {
    return a * a;
}
function sqrt(a) {
    return Math.sqrt(a);
}
function calculate(action, a, b) {
    switch(action) {
        case 'add': {
            return add(a,b);
        }
        case 'sub': {
            return sub(a,b);
        }
        case 'mul': {
            return mul(a,b);
        }
        case 'div': {
            return div(a,b);
        }
        case 'sqr':{
            return sqr(a);
        }
        case 'sqrt':{
            return sqrt(a);
        }
    }
}

let a = null
let b = null
let action = null
let calculateButton = document.getElementById("calculate")

let key1 = document.getElementById("key1")
let key2 = document.getElementById("key2")
let key3 = document.getElementById("key3")
let key4 = document.getElementById("key4")
let key5 = document.getElementById("key5")
let key6 = document.getElementById("key6")
let key7 = document.getElementById("key7")
let key8 = document.getElementById("key8")
let key9 = document.getElementById("key9")
let key0 = document.getElementById("key0")
let key00 = document.getElementById("key00")
let history = document.getElementById("history")
let screen = document.getElementById("screen")
let addButt = document.getElementById("add")
let subButt = document.getElementById("sub")
let mulButt = document.getElementById("mul")
let divButt = document.getElementById("div")
let sqrButt = document.getElementById("sqr")
let sqrtButt = document.getElementById("sqrt")
let piButt = document.getElementById("pi")
let negativButt = document.getElementById("negativ")
let modulButt = document.getElementById("modul")
function keyPress(digit){
    if ( screen.value == 0){
        screen.value = digit;
    }
    else {
    screen.value = screen.value + digit;
    }
}

key1.addEventListener('click',  function () {keyPress(1)});
key2.addEventListener('click',  function () {keyPress(2)});
key3.addEventListener('click',  function () {keyPress(3)});
key4.addEventListener('click',  function () {keyPress(4)});
key5.addEventListener('click',  function () {keyPress(5)});
key6.addEventListener('click',  function () {keyPress(6)});
key7.addEventListener('click',  function () {keyPress(7)});
key8.addEventListener('click',  function () {keyPress(8)});
key9.addEventListener('click',  function () {keyPress(9)});
key0.addEventListener('click',  function () {keyPress(0)});

piButt.addEventListener('click',  function () {
    screen.value = Math.PI});

negativButt.addEventListener('click', function () {
    screen.value = 0 - screen.value;
})

modulButt.addEventListener('click', function () {
        history.innerHTML = 'Модуль ' + screen.value
        screen.value = screen.value * screen.value;
        screen.value = Math.sqrt(screen.value);
})

key00.addEventListener('click', function () {
    if (screen.value.indexOf('.') == -1){
        if (screen.value.length == 0){
            screen.value = screen.value + 0;
        }
        screen.value = screen.value + '.'
    }
    })


addButt.addEventListener('click', function () {
    a = parseFloat(screen.value);
    history.innerHTML = a + '+';
    screen.value = 0;
    action = 'add';
})

subButt.addEventListener('click', function () {
    a = parseFloat(screen.value);
    history.innerHTML = a + '-';
    screen.value = 0;
    action = 'sub';
})

mulButt.addEventListener('click', function () {
    a = parseFloat(screen.value);
    history.innerHTML = a + '*';
    screen.value = 0;
    action = 'mul';
})
sqrtButt.addEventListener('click', function () {
    a = parseFloat(screen.value);
    action = 'sqrt';
    history.innerHTML = '&#8730 ' + a + '=';
    screen.value = calculate(action,a);
    a = parseFloat(screen.value);
    action = null;    
})

divButt.addEventListener('click', function () {
    a = parseFloat(screen.value);
    history.innerHTML = a + '/';
    screen.value = 0;
    action = 'div';
})
sqrButt.addEventListener('click', function () {
    a = parseFloat(screen.value);
    action = 'sqr';
    history.innerHTML = a + '*' + a + '=';
    screen.value = calculate(action,a);
    a = parseFloat(screen.value);
    action = null;
})

function main() {
    if (a) {
        b = parseFloat(screen.value);
        screen.value = calculate(action, a, b);
        history.innerHTML = history.innerHTML + b + '=';
        a = parseFloat(screen.value);
        b = null;
        action = null;
    }
}
    // let a = "830"
    

// document.getElementById("history").innerHTML = '830';	
// let b = document.getElementByClassName("history");
// let a = document.getElementById("key1").value;
// let keys = document.querySelector(".key")


// calculateButton.addEventListener('click', function () {
//     if (a) {
//         b = parseFloat(screen.value);
//         screen.value = calculate(action, a. b);
//         history.innerHTML = history.innerHTML + b + '=';
//         a = parseFloat(screen.value);
//         b = null;
//         action = null;
//     }
// })