var canvas  = document.createElement('CANVAS');
canvas.setAttribute("id", "canvas_pizza");

var cWidth = document.getElementById('canvas_pizza');
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(125, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#B89557';
ctx.fill();
ctx.stroke();
document.body.appendChild(canvas);

