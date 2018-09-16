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

    //CANVAS 4
    let canv4 = document.getElementById('canvas4'),
        ctx4 = canv4.getContext('2d');

    ctx4.strokeStyle= 'blue';
    ctx4.fillStyle= 'pink';
    ctx4.lineWidth = 5;

    ctx4.beginPath();
    ctx4.moveTo(30,100);
    ctx4.bezierCurveTo(50,100,100,100,10,50);
    ctx4.stroke();

    ctx4.strokeStyle= 'rgba(0,0,0,.25)';
    ctx4.fillStyle= 'pink';
    ctx4.lineWidth = 1;

    ctx4.beginPath();
    ctx4.moveTo(30,100);
    ctx4.lineTo(50,100);
    ctx4.lineTo(100,100);
    ctx4.lineTo(10,50);
    ctx4.stroke();

    ctx4.strokeStyle= 'green';
    ctx4.fillStyle= 'pink';
    ctx4.lineWidth = 3;

    ctx4.beginPath();
    ctx4.moveTo(100,90);
    ctx4.quadraticCurveTo(190,20,250,150);
    ctx4.stroke();

    ctx4.strokeStyle= 'rgba(0,0,0,.25)';
    ctx4.fillStyle= 'pink';
    ctx4.lineWidth = 1;

    ctx4.beginPath();
    ctx4.moveTo(100,90);
    ctx4.lineTo(190,20);
    ctx4.lineTo(250,150);
    ctx4.stroke();

    //CANVAS 5
    let canv5 = document.getElementById('canvas5'),
        ctx5 = canv5.getContext('2d'),
        theSring = 'Hello people';
    ctx5.fillText(theSring, 20,10);
    ctx5.font = '25pt Verdana';
    ctx5.fillStyle = 'blue';
    ctx5.strokeStyle = 'yellow';
    ctx5.fillText(theSring, 20,40);
    ctx5.strokeText(theSring, 20,40);

    //CANVAS 5
    let canv6 = document.getElementById('canvas6'),
        ctx6 = canv6.getContext('2d');
    theSring = 'Hello people';
    ctx6.shadowColor = '#000000';
    ctx6.shadowOffsetX = 10;
    ctx6.shadowOffsetY = 10;
    ctx6.shadowBlur = 10;
    ctx6.fillStyle = 'blue';
    ctx6.fillRect(10,5,100,125);
    ctx6.strokeRect(10,5,100,125);

    ctx6.shadowColor = 'rgba(0,100,100,.5)';
    ctx6.shadowOffsetX = 5;
    ctx6.shadowOffsetY = 5;
    ctx6.shadowBlur = 5;
    ctx6.fillStyle = 'green';

    ctx6.fillText(theSring, 150,10);

    ctx6.shadowColor = 'yellow';
    ctx6.shadowOffsetX = -5;
    ctx6.shadowOffsetY = -5;
    ctx6.shadowBlur = 15;
    ctx6.lineCap = 'round';
    ctx6.lineWidth = 5;
    ctx6.strokeStyle= 'red';
    ctx6.beginPath();
    ctx6.moveTo(150, 50);
    ctx6.lineTo(200, 50);
    ctx6.stroke();

    //CANVAS 7
    let canv7 = document.getElementById('canvas7'),
        ctx7 = canv7.getContext('2d'),
        patImg = new Image();
    patImg.onload = function () {
        ctx7.fillStyle = ctx7.createPattern(patImg, 'no-repeat');
        ctx7.fillRect(0,0,ctx7.canvas.width,ctx7.canvas.height);
    }
    patImg.src = 'img/1.jpg';

    //CANVAS 8
    let canv8 = document.getElementById('canvas8'),
        ctx8 = canv8.getContext('2d');

        setTimeout(function () {
        let vid = document.getElementById('video'),
            theCanvas = document.getElementById('canvas8'),
            ctx8 = theCanvas.getContext('2d'),
            patVideo = ctx8.createPattern(vid, 'no-repeat');
        ctx8.fillStyle = patVideo;
        ctx8.fillRect(0,0,ctx8.canvas.width,ctx8.canvas.height);

    },3000);

    //CANVAS 9
    let canv9 = document.getElementById('canvas9'),
        ctx9 = canv9.getContext('2d'),
        srcImg = document.getElementById('img9'),
        srcVid = document.getElementById('video');
    //srcVid.play();
    //ctx9.drawImage(srcImg,200,100,100,100,80,80,100,100);
    setInterval(function () {
        let srcVid = document.getElementById('video'),
            theCanvas = document.getElementById('canvas9'),
            ctx9 = theCanvas.getContext('2d');
            ctx9.drawImage(srcVid,0,0);
    },16);

    let canvas = null,
        context = null,
        bufferCanvas = null,
        bufferCanvasCtx = null,
        flakeArray = [],
        flakeTimer = null,
        maxFlakes = 200;
    
    function Flake() {
        this.x = Math.round(Math.random() * context.canvas.width);
        this.y = -10;
        this.drift = Math.random();
        this.speed = Math.round(Math.random() * 5) +1;
        this.width = (Math.random() * 3) +2;
        this.height = this.width;
    }

    function init() {
        canvas = document.getElementById('testCanvas');
        context = canvas.getContext('2d');
        bufferCanvas = document.createElement('canvas');
        bufferCanvasCtx = bufferCanvas.getContext('2d');
        bufferCanvasCtx.canvas.width = context.canvas.width;
        bufferCanvasCtx.canvas.height = context.canvas.height;

        flakeTimer = setInterval(addFlake, 200);
        Draw();
        setInterval(animate, 30);
    }
    function addFlake() {
        flakeArray[flakeArray.length] = new Flake();
        if (flakeArray.length == maxFlakes) {
            clearInterval(flakeTimer);
        }
    }
    function blank() {
        bufferCanvasCtx.fillStyle = '#330033';
        bufferCanvasCtx.fillRect(0,0,bufferCanvasCtx.canvas.width,bufferCanvasCtx.canvas.height);
    }
    function animate() {
        Update();
        Draw();
    }
    function Update() {
        for (let i = 0; i < flakeArray.length; i++) {
            if (flakeArray[i].y < context.canvas.height) {
                flakeArray[i].y += flakeArray[i].speed;
                if (flakeArray[i].y > context.canvas.height)
                    flakeArray[i].y = -5;
                flakeArray[i].x += flakeArray[i].drift;
                if (flakeArray[i].x > context.canvas.width)
                    flakeArray[i].x = 0;
            }
        }
    }
    function Draw() {
        context.save();

        blank();

        for (let i = 0; i < flakeArray.length; i++) {
            bufferCanvasCtx.fillStyle = 'white';
            bufferCanvasCtx.fillRect(flakeArray[i].x,flakeArray[i].y,flakeArray[i].width,flakeArray[i].height);
        }
        context.drawImage(bufferCanvas, 0,0,bufferCanvas.width,bufferCanvas.height);
        context.restore();
    }
});