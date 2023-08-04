function tkToDollar(dollar){
    let convert = dollar * 0.0092;
    let fixed = convert.toFixed(2);
    let convertInt = parseFloat(fixed)
    return convertInt;
}
const money = 4564;
// console.log(tkToDollar(money));

function barbieKen(input){
    if(input.length % 2 !== 0){
        console.log('Hi Barbie!')
    }
    else{
        console.log('Hi Ken!')
    }
}
let input1 = 'phero';
let input2 = 'batch8';
let input3 = 'chatgpt';
barbieKen(input1);
barbieKen(input2);
barbieKen(input3);
