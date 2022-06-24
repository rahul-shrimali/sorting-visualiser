const split =(array, start, end, animation)=>{
    if(start === end){
        animation.push([start, end])
        animation.push([start, end, array[start], array[start]])
        animation.push([start])
        return start
    }
    let i = start, j = end, pivot = array[start];
    // console.log(start, end);
    while(i < j){
        while(i < end && array[i] <= pivot) i++;
        while(j > start && array[j] > pivot) j--;
        
        if(i < j){
            animation.push([i, j]);
            animation.push([i, j, array[i], array[j]]);
            animation.push([-1])
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        // if(start == 0 && end == 9) console.log("here", i, j);
    }
    animation.push([start, j])
    animation.push([start, j, pivot, array[j]])
    animation.push([j])

    let temp = array[start]
    array[start] = array[j]
    array[j] = temp
    return j
}


const QuickSort = (array, start, end, animation=[])=>{
    if(start <= end){
        let pivot = split(array, start, end, animation);
        // console.log(start, end, pivot);
        QuickSort(array, start, pivot -1, animation);
        QuickSort(array, pivot + 1, end, animation);
    }
    return animation
}


export default QuickSort