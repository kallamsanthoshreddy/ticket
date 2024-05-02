document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const resultsSection = document.getElementById('results');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        
        const departure = document.getElementById('departure').value;
        const destination = document.getElementById('destination').value;

        // Perform search (not implemented in this example)
        const searchResults = performSearch(departure, destination);

        // Display search results
        displayResults(searchResults);
    });

    function performSearch(departure, destination) {
        // Simulate search results
        return [
            { id: 1, departure: 'City A', destination: 'City B', price: '$100' },
            { id: 2, departure: 'City C', destination: 'City D', price: '$150' },
            { id: 3, departure: 'City E', destination: 'City F', price: '$120' }
        ];
    }

    function displayResults(results) {
        // Clear previous results
        resultsSection.innerHTML = '';

        if (results.length === 0) {
            resultsSection.innerHTML = '<p>No results found.</p>';
        } else {
            const ul = document.createElement('ul');

            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = `From ${result.departure} to ${result.destination}, Price: ${result.price}`;
                ul.appendChild(li);
            });

            resultsSection.appendChild(ul);
        }
    }
});
