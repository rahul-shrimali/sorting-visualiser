const heapify = (arr, animations, i, n)=>{
    let mi = i;
    if(2*i +1 < n && arr[2*i + 1] > arr[mi]){
        mi = 2*i+1
    }
    if(2*i + 2 < n && arr[2*i + 2] > arr[mi]){
        mi = 2*i + 2;
    }

    if(mi !== i){
        animations.push([i, mi])
        animations.push([i, mi, arr[i], arr[mi]])
        animations.push([-1])
        let temp = arr[i]
        arr[i] = arr[mi]
        arr[mi] = temp
        heapify(arr, animations, mi, n)
    }
}

const HeapSort =(arr, animations=[])=>{
    let len = arr.length
    for(let i = len/2 - 1; i>=0; i--){
        heapify(arr, animations, i, len);    
    }
    // console.log(arr);

    for(let i = len - 1; i>=0; i--){
        animations.push([0, i])
        animations.push([0, i, arr[0], arr[i]])
        animations.push([i])
        let temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp

        heapify(arr, animations, 0, i)
        // console.log(arr);
    }

    return animations
}

export default HeapSort