const apiKey = '';

function initMap() {
    const location = { lat: 37.7749, lng: -122.4194 }; // Replace with your desired location

    const map = new google.maps.Map(document.getElementById('google-map'), {
        center: location,
        zoom: 15
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Our Location'
    });
}

// Load Google Maps API asynchronously
function loadGoogleMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    document.body.appendChild(script);
}

loadGoogleMapScript();