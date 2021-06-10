function drawBar(rectangle){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(rectangle.pos.x, rectangle.pos.y, rectangle.size.w, rectangle.size.h);
    ctx.fillStyle = "red";
    ctx.fill();
}

function drawBars(rects){
    rects.map((height,index)=>{
        let newRec={
            pos:{
                x:10*index+index,
                y:controller.canvas.height-height,
            },
            size:{
                w:getBarWidht(),
                h:height
            }
        }
        drawBar(newRec)
    })
}

function clearCanvas() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, 549, 500);
}

function getBarWidht(){
    return Math.floor((controller.canvas.width-(controller.bar.count*controller.bar.gap))/controller.bar.count)
}

function populate(){
    arr=[]
    clearCanvas()
    for(let i=0;i<50;i++){
        arr.push(Math.floor((Math.random() * 500) + 1))
    }
    drawBars(arr)
}

function delay(){
    return new Promise(resolve => setTimeout(resolve,0));
}
