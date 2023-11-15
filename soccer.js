const url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3acb329c4dmsh1dac752a33ccde5p16ef1ajsn8270ec36517a',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}