const BubbleSort = (array, animation=[])=>{
    let n = array.length
    for(let i =0; i<n; i++){
        for(let j =0; j<n - i - 1; j++){
            if(array[j] > array[j+1]){
                animation.push([j, j+1])
                animation.push([j, j+1, array[j], array[j+1]])
                animation.push([-1])

                let temp = array[j]
                array[j] = array[j+1]
                array[j+1]= temp
            }
        }
        animation.push([n-i-1, n-i-1])
        animation.push([n-i-1, n-i-1, array[n-i-1], array[n-i-1]])
        animation.push([n-i-1])
    }
    return animation
}

export default BubbleSort