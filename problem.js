function addSum(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        // console.log(element);   
        total = total + element;
        // console.log(total) ;
    }
    return total;
}
const numbers = [23, 32, 64, 75, 8, 5, 56];
const result = addSum(numbers);
console.log(result);


function sum(nums){
    let total = 0;
    for (const i of nums) {
        // total = total + i;
        total += i;
    }
    return total;
}
const nums = [23, 32, 64, 75, 8, 5, 56];
const output = sum(nums)
console.log(output);


function evenNumber(nums){
    let even =[];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let reminder = num % 2
        if (reminder === 0) {
            console.log('even number: ',num)
            
        } else {
            console.log('odd number: ',num)
        }
    }
    return even;
}

const num1 = [23, 32, 64, 75, 8, 5, 56];
var evenNum = evenNumber(num1);
console.log(evenNum);



function findOdd(nums) {
    let sum = 0;
    for (const num of nums) {
        if (num % 2 === 1) {
            sum = sum + num;
        }
    }
    return sum;
}
const num2 = [23, 32, 64, 75, 8, 5, 56];
const oddSum = findOdd(num2);
console.log(oddSum);


// make sentence

function information(info){
    const sentence = 'My name is '+ info.name + ', I am ' + info.age + ' years old' +', I lives in '+ info.address;
    return sentence;
}

const myInfo = {
    name: 'Md. Rakibul Hasn Raza',
    age: '21',
    address: 'Gazipur'
};
console.log(information(myInfo));


// factorial



function factorial(num){
    let sum = 1;
    for (let i = num; i >= 1; i--) {
        const element = i;
        // console.log(element);
        sum = sum  * element;
        // console.log(sum);
    }
    return sum;
}
const num3 = 5;
const total = factorial(num3);
console.log(num3+'!','This number factorial =', total);

function factorial(number){
    if (number === 0 || number === 1) {
        return 1;
    }
    let result = 1;
    for (let i = number; i >= 1; i--) {
        // const element = i;
        result = result * i;
    }
    return result;
}
console.log(factorial(6));
console.log(factorial(1));
console.log(factorial(8));
console.log(factorial(0));


function verifyLargest(x){
   let largest = x[0];
   for (let i = 1; i < x.length; i++) {
    const currentItem = x[i];
    if (currentItem > largest) {
        largest = currentItem;
    }
    // console.log(element);
    
   }
   return largest;
}
const num4 = [23, 32, 64, 75, 8, 5, 56];
const findLargest = verifyLargest(num4)
console.log(findLargest);

