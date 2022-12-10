const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b6e5c43dcamsh0acfaea2676ac9fp11af8djsn7de1bffb9d03',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
	.then(response => response.json())
	.then((response) =>{
        let covid = response.data;
        Array.from(covid).forEach((element) => {
            deaths.innerHTML = element.deaths
            confirmed.innerHTML = element.confirmed

            document.getElementById('deaths').appendChild(deaths)
            document.getElementById('confirmed').appendChild(confirmed)
        });
    })
	.catch(err => console.error(err));