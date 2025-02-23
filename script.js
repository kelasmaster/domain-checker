// script.js

document.getElementById('domainForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const domain = document.getElementById('domainInput').value;
    const resultDiv = document.getElementById('result');

    // Clear previous results
    resultDiv.innerHTML = '';

    // Show loading message
    resultDiv.innerHTML = 'Checking domain availability...';

    // Replace with your API endpoint and API key
    const apiUrl = `https://api.whoisxmlapi.com/whoisserver/WhoisService?apiKey=YOUR_API_KEY&domainName=${domain}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.WhoisRecord && data.WhoisRecord.registryData) {
                resultDiv.innerHTML = `<p style="color: red;">Domain <strong>${domain}</strong> is already registered.</p>`;
            } else {
                resultDiv.innerHTML = `<p style="color: green;">Domain <strong>${domain}</strong> is available!</p>`;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = `<p style="color: red;">Error checking domain: ${error.message}</p>`;
        });
});
