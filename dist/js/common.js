$(function() {
    //CANVAS
    let canv = document.getElementById('canvas'),
        ctx = canv.getContext('2d');
        canv.width = 500;
        canv.height = 300;

    //set up some drawing info
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'pink';

    //draw the first rectangle
    ctx.fillRect(25,25,100,125);
    ctx.strokeRect(25,25,100,125);

    ctx.save();

    ctx.strokeStyle= 'green';
    ctx.lineWidth = '5';
    ctx.fillStyle = 'blue';
    ctx.fillRect(175,25,100,125);
    ctx.strokeRect(175,25,100,125);

    ctx.restore();

    ctx.fillRect(375,25,100,125);
    ctx.strokeRect(375,25,100,125);

    //CANVAS 2
    let canv2 = document.getElementById('canvas2'),
        ctx2 = canv2.getContext('2d');
        canv2.width = window.innerWidth - 4;
        canv2.height = 300;
    ctx2.strokeStyle= 'green';
    ctx2.fillStyle= 'pink';
    ctx2.lineWidth = '5';
    ctx2.beginPath();
    ctx2.moveTo(0,30);
    ctx2.lineTo(canv2.width, 30);
    ctx2.lineTo(canv2.width / 2, 300);
    ctx2.closePath();
    ctx2.fill();
    ctx2.stroke();

    //CANVAS 3
    let canv3 = document.getElementById('canvas3'),
        ctx3 = canv3.getContext('2d');

    ctx3.strokeStyle= 'green';
    ctx3.fillStyle= 'pink';
    ctx3.lineWidth = '2';

    ctx3.beginPath();
    ctx3.arc(50,50,40,1.5*Math.PI,2*Math.PI);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.arc(150,50,40,0,1.5*Math.PI,false);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.arc(250,50,40,0,2*Math.PI);
    ctx3.fill();
    ctx3.stroke();

    let degrees = 200;
    let radians = (Math.PI /180) * degrees;
    ctx3.beginPath();
    ctx3.arc(50,100,40,0,radians);
    ctx3.fill();
    ctx3.stroke();

    //CANVAS 3
    let canv4 = document.getElementById('canvas4'),
        ctx4 = canv4.getContext('2d');

    ctx4.strokeStyle= 'blue';
    ctx4.fillStyle= 'pink';
    ctx4.lineWidth = '5';

    ctx4.beginPath();
    ctx4.moveTo(50,200);
    ctx4.bezierCurveTo(50,100,200,100,200,150);
    ctx4.stroke();
});