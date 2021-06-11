function drawBar(canvas,rectangle){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(rectangle.pos.x, rectangle.pos.y, rectangle.size.w, rectangle.size.h);
    ctx.fillStyle = "red";
    ctx.fill();
}

function drawBars(canvas,rects){
    rects.map((height,index)=>{
        var offset = getOffset()
        
        let newRec={
            pos:{
                x:getBarWidht()*index+index+offset,
                y:controller.canvas.height-height,
            },
            size:{
                w:getBarWidht(),
                h:height
            }
        }
        drawBar(canvas,newRec)
    })
}

function clearCanvas(canvas) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, controller.canvas.width, controller.canvas.height);
}

function getBarWidht(){
    return Math.floor((controller.canvas.width/controller.bar.count)-controller.bar.gap)
}

function delay(){
    return new Promise(resolve => setTimeout(resolve,0));
}

function getOffset(){
    return Math.floor((controller.canvas.width-(controller.bar.count*getBarWidht()))/5.5)
}