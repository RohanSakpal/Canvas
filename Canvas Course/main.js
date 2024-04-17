const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

//fillReact()
ctx.fillStyle = 'red';
ctx.fillRect(20,20,150,100);
ctx.fillStyle = 'blue';
ctx.fillRect(200,20,150,100);

//strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.strokeRect(100,200,150,100);

//fill text
ctx.font = '30px';
ctx.fillStyle = 'purple';
ctx.fillText('Hello World', 400, 50);

//fill text
ctx.lineWidth = 1;
ctx.strokeStyle = 'orange';
ctx.strokeText('Hello World', 400, 100);

//Path
ctx.beginPath();
ctx.moveTo(300,300);
ctx.lineTo(400,300);
ctx.lineTo(350,450);
//ctx.lineTo(300,300);
ctx.closePath();
ctx.stroke();

//rectangle
ctx.beginPath();
ctx.rect(450,150,250,200);
ctx.fillStyle = 'teal';
ctx.fill();

//Arc
ctx.beginPath();
ctx.arc(600,50,40,0,Math.PI*2);
ctx.stroke();