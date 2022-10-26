// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The
// function should return the length of the longest consecutive streak of the letters
// 'P' and 'Q'.
//
// Examples:
//
console.log(mindPsAndQs('BOOTCAMP')); // => 1
console.log(mindPsAndQs('APCDQQPPC')); // => 4
console.log(mindPsAndQs('PQPQ')); // => 4
console.log(mindPsAndQs('PPPXQPPPQ')); // => 5

function mindPsAndQs(str){
    let longest = 0; 
    let streak = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'P' || str[i] === 'Q'){
            streak++;
        } else {
            if(longest < streak){
                longest = streak;
            }
            streak = 0;
        }
    }
    return longest > streak ? longest : streak;
}