async function handlePDF() {
    const url = 'https://resume-parser-and-analyzer.p.rapidapi.com/api/v1/cv/';
    const fileInput = document.getElementById('pdfInput');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please select a PDF file.');
      return;
    }
  
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '84f6c64564mshba31ce1c23b3456p1dcf45jsn3f8c2cd28504',
        'X-RapidAPI-Host': 'resume-parser-and-analyzer.p.rapidapi.com'
      },
      body: file
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      // Handle the response here, maybe display it to the user
    } catch (error) {
      console.error(error);
      // Handle error, maybe display an error message to the user
    }
  }
  