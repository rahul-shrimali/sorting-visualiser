const InsertionSort =(arr, animations=[])=>{
    let len = arr.length
    for(let i =1; i<len; i++){
        let j = i-1, key = arr[i];
        while(j >= 0 && arr[j] > key) {
            animations.push([j, j+1]);
            animations.push([j, j+1, arr[j]])
            arr[j+1] = arr[j];
            j--;
        }
        animations.push([j+1, j+1])
        animations.push([j+1, j+1, key]);
        arr[j+1] = key;
    }

    return animations;
}

export default InsertionSort;