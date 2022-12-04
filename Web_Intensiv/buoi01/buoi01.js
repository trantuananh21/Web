var matHang = [
    {name: "Tao", gia: '5000/kg'},
    {name: "Dua", gia: '7000/kg'},
    {name: "Dao", gia: '3000/kg'}
]
localStorage.setItem("matHang", JSON.stringify(matHang))
console.log(matHang)

const myFunc = () =>{
    console.log("Hello World")
};

// async await
const testApi = async () =>{
    let msg = getMessageFromNA()
    console.log(msg);

    then(response => {
        console.log(response)
    })
    .catch(err =>(console.log(err)));
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a32db604dmsh86d43b61a30ba5cp117e04jsn4a2ba8bcc072',
		'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
	},
    
};
fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=eminem', options)
	.then((response) => response.json())
	.then((response) => {
        let songs = response.result.songs;
        songs.forEach((element) => {
            let img = document.createElement("img");
            img.scr = element.thumbnail;
            document.getElementById('main').appendChild(img);
        });

        let names = songs.filter((element) =>{
            return element.title;
        });
        console.log(names);
    })  
    .catch((err)=> console.log(err));