// Code your solution here
function findMatching(arr, str){
    let newArr = arr.filter(e => {
        return e.toUpperCase() === str.toUpperCase();
    });
    return newArr;
};

function fuzzyMatch(arr, str) {
    let newArr= arr.filter(e => {
        return e.charAt(0).toUpperCase() === str.charAt(0).toUpperCase();
    });
    return newArr;
};

function matchName(arr, str){
    let newArr=arr.filter(obj =>{
        return obj.name === str;
    });
    return newArr;
}