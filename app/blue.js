// BLUE
document.getElementById("blueButton").onclick = blueMap();
// document.getElementById("blueButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("blueButton");
if (re.addEventListener)
    re.addEventListener("click", blueMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', blueMap)

function blueMap() {
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
                        [-121.900367,37.701695],
                          [-121.928099,37.699759],
                          [-122.075567,37.690754],
                          [-122.1266292,37.6975918],
                          [-122.160905,37.7229335],
                          [-122.1968609,37.7543157],
                          [-122.2239172,37.7753131],
                          [-122.2653405,37.7978803],
                          [-122.294582,37.804675],
                          [-122.396742,37.792976],
                          [-122.401407,37.789256],
                          [-122.406857,37.784991],
                          [-122.413756,37.779528],
                          [-122.419694,37.765062],
                          [-122.418466,37.752254],
                          [-122.434092,37.732921],
                          [-122.447414,37.721981],
                          [-122.469081,37.706121]
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
                'line-color': '#00aeef',
                'line-width': 3
            }
        });
    });
}