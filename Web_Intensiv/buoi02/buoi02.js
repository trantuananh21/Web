// Cach goi phan tu trong object
data = [
    {
        name: "Venom",
        author: "Eninem",
        duration: 1.5,
    },

    {
        name: "Let kill this love",
        author: "Blackpink",
        duration: 3,
    },
    
    {
        name: "Don gian",
        author: "LowG",
        duration: 3,
    },

    {
        name: "Dreamer",
        author: "Jungkook",
        duration: 3.5,
    }
]
// Cach 1
Object.values(data).forEach(val => console.log(val.name));

// Cach 2
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element.author);
}
// Cach 3
for (const item of data) {
    console.log(item.duration);
}

var mySong = data[3]
mySong.duration = 5
console.log("da bi doi", mySong);
console.log("day la data", data[3]);


meinSong = {
    name: "Venom",
    author: "Eninem",
    duration: 1.5,
}
// Objecet.assign
// var result = Object.assign(meinSong,{view: 10000})
// console.log(result);

// Toan tu spread
console.log({...meinSong, view: 10500000});

var ketQua = data.map(item =>{
    return item.name
})
console.log(ketQua);



console.log("Bai tap bat dau tu day");
// Bai 1
var duration3 = data.filter(item =>{
    return item.duration == 3
})
console.log(duration3);

// Bai 2
var result2 = data.map(item =>{
    return item.author
})
console.log(result2);

// Bai 3
for (const item of data) {
    console.log(item.name);
}

// Bai 4
Object.assign(data[2],{fan: 'Tran Minh Son'})
console.log(data[2]);