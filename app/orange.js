// ORANGE
document.getElementById("orangeButton").onclick = orangeMap();
// document.getElementById("orangeButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("orangeButton");
if (re.addEventListener)
    re.addEventListener("click", orangeMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', orangeMap)

function orangeMap() {
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
                        [-122.353165,37.936887],
                        [-122.317269,37.925655],
                        [-122.299272,37.903059],
                        [-122.283451,37.87404],
                        [-122.268045,37.869867],
                        [-122.26978,37.853024],
                        [-122.2677961,37.8284091],
                        [-122.2695925,37.8079322],
                        [-122.2721546,37.8035508],
                        [-122.2666476,37.7964139],
                        [-122.2253433,37.7739122],
                        [-122.1985085,37.7530763],
                        [-122.1625282,37.7216747],
                        [-122.1280105,37.6961822],
                        [-122.0888196,37.669805],
                        [-122.0584803,37.6342836],
                        [-122.0187396,37.5906334],
                        [-121.9772135,37.5567286]
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
                'line-color': '#faa61a',
                'line-width': 3
            }
        });
    });
}