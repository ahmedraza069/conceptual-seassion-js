function addNum(a, b){
    if (typeof a !== '' || typeof b !== '') {
        return 'Plase give me numeric type of number'
    }

    return a+b;
}
console.log(addNum(5, '20'));

function addSum(num){

    if(!Array.isArray(num)){
        return 'Please provide an array'
    }
    let sum = 0;
    for (const i of num) {
        sum += i
    }
    return sum;
}
const num = [23, 32, 64, 75, 8, 5, 56];
console.log(addSum(6));



function findVowel(s){

    if(typeof s !== 'string'){
        return 'Plase provide a sentence type of string'
    }

    let vowel = 0;
    let consonant = 0;
    let space = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i].toLowerCase();
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
           vowel++; 
        } 
        else if(element !== ' '){
            consonant++;
        }
        else{
            space++;
        }
    }
    let obj = {
        vowelCount: vowel,
        consonentCount: consonant,
        spaceCount: space
    }
    return obj;

}
const sentence = 'the Name of our country is bangladesh';
console.log(findVowel(sentence));