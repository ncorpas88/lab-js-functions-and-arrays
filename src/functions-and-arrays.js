// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1;
    }else if(num2 > num1){
        return num2;
    }else if (num1 === num2){
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayLong) {
    if(arrayLong.length === 0){
        return null;
    }

    let wordLong = arrayLong[0];

    for(let i = 1; i < arrayLong.length; i++){
        if(arrayLong[i].length > wordLong.length){
        wordLong = arrayLong[i];
        }
    }
    return wordLong;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
    if(arrNum.length === 0){
        return 0;
    }
    let count = 0;
    for(let i = 0; i < arrNum.length; i++){
        count += arrNum[i];
    }
    return count;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNums) {
    let promedio = sumNumbers(arrayNums) / arrayNums.length;
    if(arrayNums.length === 0){
        return 0;
    }
   if(arrayNums){
    return promedio
   }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayPalabras, palabra) {
    if (arrayPalabras.length === 0){
        return null;
    }
    for(let i = 0; i < arrayPalabras.length; i++){
        if(arrayPalabras[i] === palabra ){
            return true
        }
    }
    return false;
}
