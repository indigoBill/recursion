//ASSIGNMENT 1

//1.
function fibs(num){
    const arr = [];

    for(let i = 0; i < num; i++){
        if(arr.length === 0){
            arr.push(0);
        }else if(arr.length === 1){
            arr.push(1);
        }else{
            let nxtVal = arr[i - 1] + arr[i - 2];

            arr.push(nxtVal);
        }
    }

    return arr;
}
console.log(fibs(8));

//2.
function fibsRec(num){
    const arr = [];

    if(num == 1){
        return 0;
    }else if(num == 2){
        return 1;
    }

    return fibsRec(num - 1) + fibsRec(num - 2);
}

function displayFibsRec(num){
    const arr = [];
    let arrLength = num;

    for(let i = 0; i < arrLength; i++){
        arr.push(fibsRec(num));
        num--;
    }

    return arr.reverse();
}
console.log(displayFibsRec(8));


//ASSIGNMENT 2
function mergeSort(arr){
    let leftArr = [];
    let rightArr = [];

    if(arr.length === 1){
        return arr;
    }

    if(arr.length > 1){
        const newLength = Math.round(arr.length/2);

        leftArr = arr.slice(0, newLength);
        rightArr = arr.slice(newLength, arr.length);    
        
        const leftSorted = mergeSort(leftArr);
        const rightSorted = mergeSort(rightArr);

        let leftIndex = 0;

        while(rightSorted.length !== 0){

            if(leftSorted[leftIndex] < rightSorted[0]){
                leftIndex++;
            }else{
                leftSorted.splice(leftIndex,0,rightSorted.shift());
            }
        }
        return leftSorted;
    }
    
    return arr;
}
console.log(mergeSort([5,1,3,6,4,2]));