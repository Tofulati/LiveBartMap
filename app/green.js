// GREEN
document.getElementById("greenButton").onclick = greenMap();
// document.getElementById("greenButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("greenButton");
if (re.addEventListener)
    re.addEventListener("click", greenMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', greenMap)

function greenMap() {
    var map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://api.maptiler.com/maps/hybrid/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // style URL
        center: [-122.2, 37.7], // starting position [lng, lat]
        zoom: 9.3
    });

    map.on('load', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [-121.9764,37.557355],
                        [-122.017867,37.591208],
                        [-122.057551,37.6348],
                        [-122.087967,37.670399],
                        [-122.1272512,37.696851],
                        [-122.161717,37.7223045],
                        [-122.1976851,37.7536963],
                        [-122.2246308,37.7746129],
                        [-122.2658775,37.7970877],
                        [-122.2945333,37.8037768],
                        [-122.3965382,37.7920915],
                        [-122.4006031, 37.7886199],
                        [-122.406054,37.7843542],
                        [-122.4127424,37.77912],
                        [-122.4185672,37.7649404],
                        [-122.4173942,37.7519538],
                        [-122.4331854,37.7323786],
                        [-122.4466235,37.721335],
                        [-122.4683093,37.705461]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#4db848',
                'line-width': 3
            }
        });
    });
}