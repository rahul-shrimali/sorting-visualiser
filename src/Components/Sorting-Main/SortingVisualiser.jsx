import React, { useEffect, useState } from "react";
import BubbleSort from "../Sorting-Algo/BubbleSort";
import HeapSort from "../Sorting-Algo/HeapSort";
import InsertionSort from "../Sorting-Algo/InsertionSort";
import MergeSort from "../Sorting-Algo/MergeSort";
import QuickSort from "../Sorting-Algo/QuickSort";

 
import "./SortingVisualiser.css";

const SortingVisualiser = () => {
  // const arraySize = 200;
  const [arraySize, setArraySize] = useState(200)
  
  const speed = 3000/arraySize;
  // console.log(speed)
  const startColor = 'white';
  const finalColor = 'green';
  const swapColor = 'red';
  const [temp, setTemp] = useState(200)
  const [array, setArray] = useState([]);
  // console.log(arraySize);
  const intialiseArray = (size = arraySize) => {
    let arr = [];
    arr.push(420)
    for (let i = 0; i < size - 1; i++) {
      let num = 2 * Math.floor(190 * Math.random() + 20);
      arr.push(num);
    }
    setArray(arr);
    const arrayBars = document.getElementsByClassName("array-bars");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = startColor;
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => intialiseArray(arraySize), []);
  
  const mergeSort = () => {
    
    let animations = MergeSort(array, 0, arraySize - 1);
    
    let l = animations.length;
    for (let i = 0; i < l; i++) {
      const arrayBars = document.getElementsByClassName("array-bars");
      
      let colorChange = i % 3 !== 2 ? true : false;
      if (colorChange) {
        let firstEle = animations[i][0];
        let secondEle = animations[i][1];
        let color = i % 3 === 0 ? swapColor : startColor;

        setTimeout(() => {
          
          arrayBars[firstEle].style.backgroundColor = color;
          arrayBars[secondEle].style.backgroundColor = color;
        }, i*speed);
      } else {
        let ele = animations[i][0];

        setTimeout(() => {
          arrayBars[ele].style.height = `${animations[i][1]}px`;
        }, i*speed);
      }
    }
  };

  const quickSort = () => {
    
    let animations = QuickSort(array, 0, arraySize - 1);
    
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bars");
      
      let colorChange = i % 3 !== 2 ? true : false;
      if (colorChange) {
        let firstEle = animations[i][0];
        let secondEle = animations[i][1];
        
        let color = i % 3 === 0 ? swapColor : startColor;

        setTimeout(() => {
          
          arrayBars[firstEle].style.backgroundColor = color;
          arrayBars[secondEle].style.backgroundColor = color;

          if (i % 3 === 1) {
            let h1 = animations[i][2],
              h2 = animations[i][3];
            arrayBars[secondEle].style.height = `${h1}px`;
            arrayBars[firstEle].style.height = `${h2}px`;
          }
        }, i*speed);
      } else {
        let ele = animations[i][0];
        if (ele !== -1) {
          setTimeout(() => {
            arrayBars[ele].style.backgroundColor = finalColor;
          }, i*speed);
        }
      }
    }
  };

  const heapSort = () => {

    let animations = HeapSort(array);
    
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bars");
      
      let colorChange = i % 3 !== 2 ? true : false;
      if (colorChange) {
        let firstEle = animations[i][0];
        let secondEle = animations[i][1];
        
        let color = i % 3 === 0 ? swapColor : startColor;

        setTimeout(() => {
          
          arrayBars[firstEle].style.backgroundColor = color;
          arrayBars[secondEle].style.backgroundColor = color;

          if (i % 3 === 1) {
            let h1 = animations[i][2],
              h2 = animations[i][3];
            arrayBars[secondEle].style.height = `${h1}px`;
            arrayBars[firstEle].style.height = `${h2}px`;
          }
        }, i*speed);
      } else {
        let ele = animations[i][0];
        if (ele !== -1) {
          setTimeout(() => {
            arrayBars[ele].style.backgroundColor = finalColor;
          },i*speed );
        }
      }
    }
  };

  const bubbleSort = () => {
    let animations = BubbleSort(array);
    
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bars");
      
      let colorChange = i % 3 !== 2 ? true : false;
      if (colorChange) {
        let firstEle = animations[i][0];
        let secondEle = animations[i][1];
        
        let color = i % 3 === 0 ? swapColor : startColor;

        setTimeout(() => {
          
          arrayBars[firstEle].style.backgroundColor = color;
          arrayBars[secondEle].style.backgroundColor = color;

          if (i % 3 === 1) {
            let h1 = animations[i][2],
              h2 = animations[i][3];
            arrayBars[secondEle].style.height = `${h1}px`;
            arrayBars[firstEle].style.height = `${h2}px`;
          }
        }, i*speed );
      } else {
        let ele = animations[i][0];
        if (ele !== -1) {
          setTimeout(() => {
            arrayBars[ele].style.backgroundColor = finalColor;
          }, i*speed);
        }
      }
    }
  };

  const insertionSort = () => {
    
    let animations = InsertionSort(array);
    
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bars");

      let firstEle = animations[i][0];
      let secondEle = animations[i][1];
      
      let color = i %2 === 0 ? swapColor : startColor;

      setTimeout(() => {
        
        arrayBars[firstEle].style.backgroundColor = color;
        arrayBars[secondEle].style.backgroundColor = color;

        if (i % 2 === 1) {
          let h1 = animations[i][2];
          arrayBars[secondEle].style.height = `${h1}px`;
        }
      }, i*speed);
    }
  };
  const handleChange = (event)=>{
      setTemp(event.target.value)
      // console.log(temp);
      resizeArray()
  }

  const resizeArray = ()=>{
    console.log(temp);
    setArraySize(temp)
    intialiseArray(temp)

  }
  return (
    <>
      <div className="Navbar">
        <button className="button" id="first">
          Sorting Visualiser
        </button>
        <button className="button" onClick={mergeSort}>
          MergeSort
        </button>
        <button className="button" onClick={quickSort}>
          Quick Sort
        </button>
        <button className="button" onClick={heapSort}>
          Heap Sort
        </button>
        <button className="button" onClick={bubbleSort}>
          Bubble Sort
        </button>
        <button className="button" onClick={insertionSort}>
          Insertion Sort
        </button>
        <button className="button last" onClick={resizeArray}>
           Array size {arraySize}
        </button>
        <input type="range" min="10" max="250" class="slider" step={10} id="myRange" value={temp}  onChange={handleChange}/>
       
        
      </div>
      <div className="bar-block">
        {array.map((value, index) => {
          return (
            <div
              className="array-bars"
              key={index}
              style={{ height: `${value}px`, backgroundColor: startColor , width: `${600/arraySize}px`}}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default SortingVisualiser;
