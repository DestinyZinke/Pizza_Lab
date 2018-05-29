
function createHTML(){
    var reset = "<link rel=stylesheet href=reset.css>"
    var css = "<link rel=stylesheet href=style.css>";
    document.head.innerHTML += reset + css;
    navBar();
   // createPizzas();
}

function navBar(){
    var nav = document.createElement("NAV");
    nav.setAttribute("id","navBar"); 
    nav.innerHTML += "<ul id=navList><li id=navCompany class=navItem>Pizza Now</li><li class=navItem>Home</li><li class=navItem>Order</li><li class=navItem>Contact Us</li></ul>"
    document.body.appendChild(nav);
}


// function createPizzas(){
//     var pizza = document.createElement("DIV");
//     pizza.innerHTML = "<canvas id=small_pizza><button></button></canvas><canvas id=medium_pizza><button></button></canvas><canvas id=large_pizza><button></button></canvas>"
//     pizza.width = 1000;
//     pizza.height = 1000;
    
//     document.body.appendChild(pizza);
//     pizza.setAttribute("id", "pizzaList")   
//     createSmallPizza();
//     createMedPizza()
//     createLargePizza();
// }


// function createSmallPizza(){
//     var spCanvas = document.getElementById('small_pizza');
//     var spCtx = spCanvas.getContext("2d");
    
//     spCanvas.width = 250;
//     spCanvas.height = 300;
//     spCtx.beginPath();
//     spCtx.arc(125, 100, 75,0, 2*Math.PI);
//     spCtx.fillStyle = '#D4BB75';
//     spCtx.fill();
//     document.body.appendChild(spCanvas);
// }

// function createMedPizza(){
//     var mpCanvas = document.getElementById('medium_pizza');
//     var mpCtx = mpCanvas.getContext("2d");
    
//     mpCanvas.width = 250;
//     mpCanvas.height = 300;
//     mpCtx.beginPath();
//     mpCtx.arc(150, 125, 100,0, 2*Math.PI);
//     mpCtx.fillStyle = '#D4BB75';
//     mpCtx.fill();
//     document.body.appendChild(mpCanvas);
// }

// function createLargePizza(){
//     var lpCanvas = document.getElementById('large_pizza');
//     var lpCtx = lpCanvas.getContext("2d");
    
//     lpCanvas.width = 350;
//     lpCanvas.height = 300;
//     lpCtx.beginPath();
//     lpCtx.arc(175, 150, 125,0, 2*Math.PI);
//     lpCtx.fillStyle = '#D4BB75';
//     lpCtx.fill();
//     document.body.appendChild(lpCanvas);
//}

createHTML();


