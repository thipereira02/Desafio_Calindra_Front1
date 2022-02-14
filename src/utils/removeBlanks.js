export default function removeBlanks (arr) {
    const adjustedArr = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i].length !== 0) adjustedArr.push(arr[i]);
    }
    return adjustedArr;
}