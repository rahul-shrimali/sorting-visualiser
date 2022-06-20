import React, { useEffect, useState } from 'react'
import BubbleSort from '../Sorting-Algo/BubbleSort'
import MergeSort from '../Sorting-Algo/MergeSort'
import QuickSort from '../Sorting-Algo/QuickSort'
import './SortingVisualiser.css'
 
const SortingVisualiser = () => {
    
    useEffect(()=>intialiseArray(200), [])
    
    const [array, setArray] = useState([])
    const intialiseArray = (size)=>{
        let arr=[]
        for(let i =0; i<size; i++){
            let num = 2*Math.floor(190*Math.random() + 20)
            arr.push(num)
        }
        setArray(arr)
    }
    const resetArray = ()=>{
        intialiseArray(200)
        const arrayBars = document.getElementsByClassName('array-bars')
        for(let i =0; i<arrayBars.length; i++){
            arrayBars[i].style.backgroundColor = 'aqua'
        }
    }
    const mergeSort = ()=>{
        // {console.log(array)}
        let animations = MergeSort(array, 0, 199)
        // {console.log(array)}
        // {console.log(animations)}
        let l = animations.length
        for(let i =0; i<l; i++){
            const arrayBars = document.getElementsByClassName('array-bars')
            // {console.log(arrayBars)}
            let colorChange = (i%3 !== 2) ? true : false;
            if(colorChange){
                let firstEle = animations[i][0]
                let secondEle = animations[i][1]
                let color = (i%3 === 0 ) ? 'black' : 'aqua'

                setTimeout(() => {
                    // {console.log(firstEle)}
                    arrayBars[firstEle].style.backgroundColor = color
                    arrayBars[secondEle].style.backgroundColor = color

                }, i*15);
            }else{
                let ele = animations[i][0]

                setTimeout(() => {
                    arrayBars[ele].style.height = `${animations[i][1]}px`
                }, i*15);
            }
        }
    }

    const quickSort = ()=>{
        // {console.log(array)}
        let animations = QuickSort(array, 0, 199);
        // {console.log(animations)}
        for(let i =0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bars')
            // {console.log(arrayBars)}
            let colorChange = (i%3 !== 2) ? true : false;
            if(colorChange){
                let firstEle = animations[i][0]
                let secondEle = animations[i][1]
                // console.log(firstEle, secondEle)
                let color = (i%3 === 0 ) ? 'red' : 'aqua'
                
                setTimeout(() => {
                    // {console.log(firstEle)}
                    arrayBars[firstEle].style.backgroundColor = color
                    arrayBars[secondEle].style.backgroundColor = color
                    
                    if(i%3 === 1){
                        let h1 = animations[i][2], h2 = animations[i][3]
                        arrayBars[secondEle].style.height = `${h1}px`
                        arrayBars[firstEle].style.height = `${h2}px`
                    }
                }, i*15);
            }else{
                let ele = animations[i][0]
                if(ele !== -1){
                    setTimeout(() => {
                        arrayBars[ele].style.backgroundColor = 'green'
                    }, i*15);
                }
            }
        }
    }

    const bubbleSort = ()=>{
        let animations = BubbleSort(array)
        // {console.log(animations)}
        for(let i =0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bars')
            // {console.log(arrayBars)}
            let colorChange = (i%3 !== 2) ? true : false;
            if(colorChange){
                let firstEle = animations[i][0]
                let secondEle = animations[i][1]
                // console.log(firstEle, secondEle)
                let color = (i%3 === 0 ) ? 'red' : 'aqua'
                
                setTimeout(() => {
                    // {console.log(firstEle)}
                    arrayBars[firstEle].style.backgroundColor = color
                    arrayBars[secondEle].style.backgroundColor = color
                    
                    if(i%3 === 1){
                        let h1 = animations[i][2], h2 = animations[i][3]
                        arrayBars[secondEle].style.height = `${h1}px`
                        arrayBars[firstEle].style.height = `${h2}px`
                    }
                }, i*3);
            }else{
                let ele = animations[i][0]
                if(ele !== -1){
                    setTimeout(() => {
                        arrayBars[ele].style.backgroundColor = 'green'
                    }, i*3);
                }
            }
        }
    }
    
    return (
        <>
        <button className='button' onClick={mergeSort}>MergeSort</button>
        <button className='button' onClick={quickSort}>Quick Sort</button>
        <button className='button' onClick={bubbleSort}>Bubble Sort</button>
        <button className='button' onClick={resetArray}>Reset Array</button>
        <div className='bar-block'>
            {array.map((value, index)=>{
                return <div className="array-bars" key={index} style={{height:`${value}px`, backgroundColor: 'aqua' }}></div>
            })}
        </div>
    </>
  )
}


export default SortingVisualiser