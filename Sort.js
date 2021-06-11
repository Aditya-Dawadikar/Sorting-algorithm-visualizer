function swap(arr,i, j)
{
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//bubble sort
async function bubbleSort(canvas,arr){
    clearCanvas(canvas)
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            await delay()
            if(arr[j] > arr[j+1]){   
                swap(arr,j,j+1);            
            }        
            clearCanvas(canvas)
            drawBars(canvas,arr)
        }
    }
}

//insertion sort
async function insertionSort(canvas,arr){
    clearCanvas(canvas)
    for(var i=1;i<arr.length;i++){
        let temp = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>temp){
            await delay()
            arr[j+1]=arr[j]
            j--;
            clearCanvas(canvas)
            drawBars(canvas,arr)
        }
        arr[j+1]=temp;
    }
}

//selection sort
async function selectionSort(canvas,arr){
    clearCanvas(canvas)
    for(var i=0;i<arr.length-1;i++){
        var minIndex=i;
        for(j=i+1;j<arr.length;j++){
            await delay()
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
            
            clearCanvas(canvas)
            drawBars(canvas,arr)
        }
        swap(arr,minIndex,i)
    }
    
    clearCanvas(canvas)
    drawBars(canvas,arr)
}


//quick sort
async function partition(canvas,arr,low,high){
    // console.log(arr)
    var pivot = arr[high]
    var i = low-1;
    for(var j=low;j<high;j++){
        await delay()
        if(arr[j]<pivot){
            i++;
            swap(arr,i,j)
        }
        
        clearCanvas(canvas)
        drawBars(canvas,arr)
    }
    swap(arr,i+1,high)
    return i+1
}

async function quickSort(canvas,arr,low,high){
    if(low<high){
        var mid = await partition(canvas,arr,low,high)
        quickSort(canvas,arr,low,mid-1)
        clearCanvas(canvas)
        drawBars(canvas,arr)

        quickSort(canvas,arr,mid+1,high)
        clearCanvas(canvas)
        drawBars(canvas,arr)
    }
    
    clearCanvas(canvas)
    drawBars(canvas,arr)
}

async function startQuickSort(canvas,arr){
    clearCanvas(canvas)
    await quickSort(canvas,arr,0,arr.length-1);
}

//merge sort
async function merge(canvas,arr,l,m,r){

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
        clearCanvas(canvas)
        drawBars(canvas,arr)
    }
    while (i < n1) {
        await delay()
        arr[k] = left[i];
        i++;
        k++;
        clearCanvas(canvas)
        drawBars(canvas,arr)
    }
    while (j < n2) {
        await delay()
        arr[k] = right[j];
        j++;
        k++;
        clearCanvas(canvas)
        drawBars(canvas,arr)
    }

}

async function mergeSort(canvas,arr,l,r){
    if(l>=r){
        return
    }
    var m = l + parseInt((r-l)/2)

    await delay()
    await mergeSort(canvas,arr,l,m)
    clearCanvas(canvas)
    drawBars(canvas,arr)
    
    await delay()
    await mergeSort(canvas,arr,m+1,r)
    clearCanvas(canvas)
    drawBars(canvas,arr)
    
    await delay()
    await merge(canvas,arr,l,m,r)
    clearCanvas(canvas)
    drawBars(canvas,arr)
}

async function startMergeSort(canvas,arr){
    clearCanvas(canvas)
    await mergeSort(canvas,arr,0,arr.length)
    clearCanvas(canvas)
    drawBars(canvas,arr)
}