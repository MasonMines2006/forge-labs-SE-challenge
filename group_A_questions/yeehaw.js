/**
 * Generates an array of strings for numbers from 1 to n.
 * - Multiples of 3 and 4 → "yeehaw"
 * - Multiples of 3 → "yee"
 * - Multiples of 4 → "haw"
 * - Otherwise → The number as a string
 *
 * @param {number} n - The upper limit of the sequence.
 * @return {string[]} - The generated sequence with "yee", "haw", and "yeehaw".
 */

var fizzBuzz = function(n) {
    var arr=[];
    for(let i=1; i<=n;i++){
        if(i%3==0 && i%4==0){
            arr.push("yeehaw");
            continue;
        }else if(i%3==0){
            arr.push("yee");
            continue;
        }else if(i%4==0){
            arr.push("haw");
            continue;
        }else{
            arr.push(i.toString());
        }
    }
    return arr;
};