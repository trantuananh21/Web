// Methods
// array.slice(start, end)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); => Orange,Lemon

// string.split(separator, limit)
// let text = "How are you doing today?";
// const myArray = text.split(" ", 3); => How,are,you

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// const numbers = [175, 50, 25];
// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);
// function myFunc(total, num) {
//   return total - num;
// } => 100 (Math.round(num)) la lam tron

// Bai 1
var arr1 = [1,2,4,5,6];
var arr2 = [1,6,8,9,0];

var arr = arr1.filter(item => {
    return arr2.includes(item);
})
console.log(arr);

// Bai 2
var arr3 = [1,5,4,6,7];
var map = arr3.map(item =>{
    return item + 5
})
console.log(map);

// Bai 3
let m = [1,2,4,5,6,7]; 
let n = [3,5,675,8,96];

m.filter((item)=>{
    del = [1,8,10,96,7]
        return !del.includes(item)
});

n.filter((item)=>{
    del = [1,8,10,96,7]
        return !del.includes(item)
});
result = Object.assign(m,n)
console.log(result);

// Bai 4
console.log('Bai 4');
players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
]

var footballers = players.reduce((total,player)=>{
    const number = player.id;
    if (total[number] == null) total[number] = []
    total[number].push(player)
    return total
},{})
console.log(footballers);