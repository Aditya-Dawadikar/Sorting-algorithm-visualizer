var canvas1 = document.getElementById('canvas-1');
var canvas2 = document.getElementById('canvas-2');
var canvas3 = document.getElementById('canvas-3');
var canvas4 = document.getElementById('canvas-4');
var canvas5 = document.getElementById('canvas-5');

let baseArr=[]

let arrC1=[]
let arrC2=[]
let arrC3=[]
let arrC4=[]
let arrC5=[]

function populateAll(){
    baseArr=[]
    for(let i=0;i<controller.bar.count;i++){
        baseArr.push(Math.floor((Math.random() * controller.canvas.height) + 1))
    }

    arrC1=baseArr
    clearCanvas(canvas1)
    drawBars(canvas1,arrC1)
    
    arrC2=baseArr
    clearCanvas(canvas2)
    drawBars(canvas2,arrC2)

    arrC3=baseArr
    clearCanvas(canvas3)
    drawBars(canvas3,arrC3)

    arrC4=baseArr
    clearCanvas(canvas4)
    drawBars(canvas4,arrC4)

    arrC5=baseArr
    clearCanvas(canvas5)
    drawBars(canvas5,arrC5)

}

function populateCanvas1(){
    document.getElementById('canvas-1-data').innerHTML=""
    arrC1=[]
    for(let i=0;i<controller.bar.count;i++){
        arrC1.push(Math.floor((Math.random() * controller.canvas.height) + 1))
    }
    clearCanvas(canvas1)
    drawBars(canvas1,arrC1)
}
function populateCanvas2(){
    document.getElementById('canvas-2-data').innerHTML=""
    arrC2=[]
    for(let i=0;i<controller.bar.count;i++){
        arrC2.push(Math.floor((Math.random() * controller.canvas.height) + 1))
    }
    clearCanvas(canvas2)
    drawBars(canvas2,arrC2)
}
function populateCanvas3(){
    document.getElementById('canvas-3-data').innerHTML=""
    arrC3=[]
    for(let i=0;i<controller.bar.count;i++){
        arrC3.push(Math.floor((Math.random() * controller.canvas.height) + 1))
    }
    clearCanvas(canvas3)
    drawBars(canvas3,arrC3)
}
function populateCanvas4(){
    document.getElementById('canvas-4-data').innerHTML=""
    arrC4=[]
    for(let i=0;i<controller.bar.count;i++){
        arrC4.push(Math.floor((Math.random() * controller.canvas.height) + 1))
    }
    clearCanvas(canvas4)
    drawBars(canvas4,arrC4)
}
function populateCanvas5(){
    document.getElementById('canvas-5-data').innerHTML=""
    arrC5=[]
    for(let i=0;i<controller.bar.count;i++){
        arrC5.push(Math.floor((Math.random() * controller.canvas.height) + 1))
    }
    clearCanvas(canvas5)
    drawBars(canvas5,arrC5)
}

async function triggerBubbleSort(){
    var performance = window.performance;
    var t0 = performance.now();
    
    await bubbleSort(canvas1,arrC1)
    
    var t1 = performance.now();

    document.getElementById('canvas-1-data').innerHTML="executed in "+Math.round(t1 - t0) + " milliseconds."
}

async function triggerInsertionSort(){
    var performance = window.performance;
    var t0 = performance.now();
    
    await insertionSort(canvas2,arrC2)
    
    var t1 = performance.now();
    document.getElementById('canvas-2-data').innerHTML="executed in "+Math.round(t1 - t0) + " milliseconds."
}

async function triggerSelectionSort(){
    var performance = window.performance;
    var t0 = performance.now();

    await selectionSort(canvas3,arrC3)

    var t1 = performance.now();
    document.getElementById('canvas-3-data').innerHTML="executed in "+Math.round(t1 - t0) + " milliseconds."
}

async function triggerQuickSort(){
    var performance = window.performance;
    var t0 = performance.now();

    await startQuickSort(canvas4,arrC4)

    var t1 = performance.now();
    document.getElementById('canvas-4-data').innerHTML="executed in "+Math.round(t1 - t0) + " milliseconds."
}

async function triggerMergeSort(){
    var performance = window.performance;
    var t0 = performance.now();

    await startMergeSort(canvas5,arrC5)

    var t1 = performance.now();
    document.getElementById('canvas-5-data').innerHTML="executed in "+Math.round(t1 - t0) + " milliseconds."
}

function clearData(id,canvas){
    document.getElementById(id).innerHTML=""
    clearCanvas(canvas)
}