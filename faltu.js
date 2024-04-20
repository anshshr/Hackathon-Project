const url = 'https://resume-parser-and-analyzer.p.rapidapi.com/api/v1/cv/';
const data = new FormData();
data.append('file', 'ANSH_RESUME.pdf');

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '84f6c64564mshba31ce1c23b3456p1dcf45jsn3f8c2cd28504',
		'X-RapidAPI-Host': 'resume-parser-and-analyzer.p.rapidapi.com'
	},
	body: data
};

try  {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}