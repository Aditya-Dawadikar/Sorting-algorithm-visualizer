function swap(i, j)
{
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//bubble sort
async function bubbleSort(){
    clearCanvas();
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            await delay()
            if(arr[j] > arr[j+1]){   
                swap(j,j+1);            
            }
            clearCanvas();
            drawBars(arr)
        }
    }
}

//insertion sort
async function insertionSort(){
    clearCanvas()
    for(var i=1;i<arr.length;i++){
        let temp = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>temp){
            await delay()
            arr[j+1]=arr[j]
            j--;
            clearCanvas();
            drawBars(arr)
        }
        arr[j+1]=temp;
    }
}

//selection sort
async function selectionSort(){
    clearCanvas()
    for(var i=0;i<arr.length-1;i++){
        var minIndex=i;
        for(j=i+1;j<arr.length;j++){
            await delay()
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
            clearCanvas();
            drawBars(arr)
        }
        swap(minIndex,i)
    }
    clearCanvas();
    drawBars(arr)
}


//quick sort
async function partition(low,high){
    var pivot = arr[high]
    var i = low-1;
    for(var j=low;j<high;j++){
        await delay()
        if(arr[j]<pivot){
            i++;
            swap(i,j)
        }
        clearCanvas()
        drawBars(arr)
    }
    swap(i+1,high)
    return i+1
}

async function quickSort(low,high){
    if(low<high){
        var mid = await partition(low,high)
        quickSort(low,mid-1)
        quickSort(mid+1,high)
    }
    clearCanvas()
    drawBars(arr)
}

function startQuickSort(){
    clearCanvas()
    quickSort(0,arr.length-1);
}

//merge sort
async function merge(l,m,r){

    var n1 = m-l+1
    var n2 = r-m

    var left = new Array(n1)
    var right = new Array(n2)

    for(var i=0;i<n1;i++){
        left[i]=arr[l+i]
    }
    for(var i=0;i<n2;i++){
        right[i]=arr[m+i+1]
    }

    var i=0
    var j=0
    var k=l

    while (i < n1 && j < n2) {
        await delay()
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
        clearCanvas()
        drawBars(arr)
    }
    while (i < n1) {
        await delay()
        arr[k] = left[i];
        i++;
        k++;
        clearCanvas()
        drawBars(arr)
    }
    while (j < n2) {
        await delay()
        arr[k] = right[j];
        j++;
        k++;
        clearCanvas()
        drawBars(arr)
    }

}

async function mergeSort(l,r){
    if(l>=r){
        return
    }
    var m = l + parseInt((r-l)/2)

    await delay()
    await mergeSort(l,m)
    clearCanvas()
    drawBars(arr)
    
    await delay()
    await mergeSort(m+1,r)
    clearCanvas()
    drawBars(arr)
    
    await delay()
    await merge(l,m,r)
    
}

async function startMergeSort(){
    clearCanvas()
    await mergeSort(0,arr.length)
    clearCanvas()
    drawBars(arr)
}