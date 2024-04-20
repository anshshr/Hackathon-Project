const apiKey = '78691335c33512b7e3fb6cc06e5b8bef381b99ca05f63235e555609b3a2e9ebe';
const searchQuery = 'flutter developer';
const language = 'en';

fetch(`https://serpapi.com/search.json?engine=google_jobs&q=${searchQuery}&hl=${language}&api_key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data["jobs_results"]); // Assuming you want to log the job results
    // You can handle the data here according to your requirements
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle errors here
  });
