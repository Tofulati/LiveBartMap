// YELLOW
document.getElementById("yellowButton").onclick = yellowMap();
// document.getElementById("yellowButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("yellowButton");
if (re.addEventListener)
    re.addEventListener("click", yellowMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', yellowMap)

function yellowMap() {
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
                        [-121.945154,38.018914],
                        [-122.024597,38.003275],
                        [-122.029095,37.973737],
                        [-122.056013,37.928403],
                        [-122.067423,37.905628],
                        [-122.123801,37.893394],
                        [-122.183791,37.878361],
                        [-122.251793,37.844601],
                        [-122.2666934,37.8282587],
                        [-122.2684655,37.8078078],
                        [-122.2715151,37.80322],
                        [-122.2947035,37.8055689],
                        [-122.3969458,37.7938605],
                        [-122.402211,37.7898921],
                        [-122.40766,37.7856278],
                        [-122.4147696,37.779936],
                        [-122.4208208,37.7651836],
                        [-122.4195378,37.7525542],
                        [-122.4349986,37.7334634],
                        [-122.4482045,37.722627],
                        [-122.4701365,37.7064541],
                        [-122.466233,37.684638],
                        [-122.444116,37.664174],
                        [-122.416038,37.637753],
                        [-122.392612,37.616035],
                        [-122.38666, 37.599787]
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
                'line-color': '#ffe800',
                'line-width': 3
            }
        });
    });
}