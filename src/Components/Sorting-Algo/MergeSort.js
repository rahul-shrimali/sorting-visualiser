const merge = (array, start, mid, end, animation)=>{
    let first = [], second = []
    for(let i = start; i<=mid; i++){
        first.push(array[i])
    }

    for(let i = mid+1; i<=end; i++){
        second.push(array[i])
    }

    let i =start, j = mid + 1, k = start

    while(i <= mid && j <= end ){
        animation.push([ i, j])
        animation.push([i, j])
        // animation.push([i, j])
        
        if(first[i-start] <= second[j-mid -1]){
            array[k] = first[i-start]

            animation.push([k, first[i-start]])
            i++;
            k++;
        }else{
            array[k] = second[j-mid-1]

            animation.push([k, second[j-mid-1]])
            j++;k++;
        }
    }

    while(i <= mid){
        animation.push([i, i])
        animation.push([i, i])
        array[k] = first[i-start]
        animation.push([k, first[i-start]])
        i++;
        k++;
    }

    while(j <= end ){
        animation.push([j, j])
        animation.push([j, j])
        array[k] = second[j-mid - 1]

        animation.push([k, second[j-mid-1]])
        j++;k++;
    }
}

const MergeSort = (array, start, end, animation=[]) => {
    if(start < end){
        let mid = Math.floor((start+end)/2);
        MergeSort(array, start, mid, animation)
        MergeSort(array, mid+1, end, animation)
        
        merge(array, start, mid, end, animation)
    }
    // {console.log(array)}
    return animation
}

export default MergeSort