// RED
document.getElementById("redButton").onclick = redMap();
// document.getElementById("redButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("redButton");
if (re.addEventListener)
    re.addEventListener("click", redMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', redMap)

function redMap() {
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
                        [-122.3535851,37.9360513],
                        [-122.3179784,37.9249513],
                        [-122.300284,37.902646],
                        [-122.2843653,37.8735039],
                        [-122.269058,37.8694562],
                        [-122.2709185,37.85301],
                        [-122.2689342,37.8283973],
                        [-122.2707195,37.8080566],
                        [-122.2718706,37.804996],
                        [-122.2948251,37.8064628],
                        [-122.3971496,37.794745],
                        [-122.4030149,37.7905282],
                        [-122.4084631,37.7862646],
                        [-122.4157833,37.7803439],
                        [-122.4219476,37.7653052],
                        [-122.4206096,37.7528545],
                        [-122.4359052,37.7340058],
                        [-122.448995,37.723273],
                        [-122.471192,37.7067871],
                        [-122.4672607,37.6842548],
                        [-122.4449822,37.6635925],
                        [-122.4169649,37.6372339],
                        [-122.3876274,37.5993171]
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
                'line-color': '#ed1c24',
                'line-width': 3
            }
        });
    });
}