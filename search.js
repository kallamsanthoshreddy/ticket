document.addEventListener('DOMContentLoaded', function() {
    // Parse query parameters from URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const departure = urlParams.get('departure');
    const destination = urlParams.get('destination');
    const travelDate = urlParams.get('travelDate');

    // Display the search criteria
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `
        <h2>Search Results</h2>
        <p>Departure: ${departure}</p>
        <p>Destination: ${destination}</p>
        <p>Travel Date: ${travelDate}</p>
    `;

    // Static bus information for demonstration
    const busData = {
        "Delhi": {
            "Mumbai": ["Bus 1", "Bus 2", "Bus 3"],
            "Bangalore": ["Bus 4", "Bus 5"]
        },
        "Mumbai": {
            "Delhi": ["Bus 6", "Bus 7"],
            "Bangalore": ["Bus 8"]
        },
        "Bangalore": {
            "Delhi": ["Bus 9"],
            "Mumbai": ["Bus 10"]
        }
    };

    // Check if bus information is available for the selected cities
    if (busData.hasOwnProperty(departure) && busData[departure].hasOwnProperty(destination)) {
        const buses = busData[departure][destination];
        if (buses.length > 0) {
            // Display bus details
            resultsSection.innerHTML += "<h3>Available Buses:</h3>";
            const ul = document.createElement('ul');
            buses.forEach(bus => {
                const li = document.createElement('li');
                li.textContent = bus;
                ul.appendChild(li);
            });
            resultsSection.appendChild(ul);
        } else {
            resultsSection.innerHTML += "<p>No buses available for the selected route.</p>";
        }
    } else {
        resultsSection.innerHTML += "<p>No bus information available for the selected cities.</p>";
    }
});

