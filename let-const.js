// var x = 'hello';
// x = 'world'
// console.log(x);

// let
// const

// let x = 'hello';
// x = 'raza';

// console.log(x);

// const y = 'world';
// y = 'hasan';

// console.log(y);

// let => we cannot reassign value to not re declear it
// const => we can not reassign and redeclear value of it

// const name = 'Rakibul Hasan Raza';
// const result = name.includes('er')
// console.log(result);

// const arr = ['Rakib', 'Hasan', 'Raza', 'Shanto', 'Johirul']
// const result = arr.includes('Hsan');
// console.log(result)

// const friends = ['Rakib', 'Hasan', 'Raza', 'Shanto', 'Johirul'];
// console.log(friends.slice(2));
// console.log(friends.slice(2, 4));  
// const result = friends.splice(2, 2);
// friends.splice(2,0,'Shakil', 'Romjan')
// console.log(result);
// console.log(friends);

const friends = ['Rakib', 'Hasan', 'Raza', 'Shanto', 'Johirul'];
friends.pop()
friends.shift();
friends.shift();
console.log(friends);

// Object

// let samsungBrand = {
//     name: 'Samsung Galaxy',
//     model: 'ultra s-20',
//     weight: 400,
//     display: 6.5,
// }
// . Dote Notation, Braket Notation
// console.log(samsungBrand.model);         
// console.log(samsungBrand['name']);
// var x = 'display';
// console.log(samsungBrand[x]);
// const keys = Object.keys(samsungBrand);
// const values = Object.values(samsungBrand);
// console.log(values);
// console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//     const element = keys[i];
    // console.log(element);
//     console.log(samsungBrand[keys[i]]);
// }
// for (const key of keys) {
//     console.log(samsungBrand[key]);
// }

let samsungBrand = {
    name: 'Samsung Galaxy',
    model: 'ultra s-20',
    weight: 400,
    display: 6.5,
}
for (const i in samsungBrand) {
    console.log(typeof i, i);
    console.log(samsungBrand[i]);
}