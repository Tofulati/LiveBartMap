// BLUE
document.getElementById("blueButton").onclick = blueMap();
// document.getElementById("blueButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("blueButton");
if (re.addEventListener)
    re.addEventListener("click", blueMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', blueMap)

// Show Details
function showB() {
    var text = document.getElementById("bDetail");
    text.style.display = "block";
    document.getElementById("gDetail").style.display = "none";
    document.getElementById("oDetail").style.display = "none";
    document.getElementById("rDetail").style.display = "none";
    document.getElementById("yDetail").style.display = "none";
}

// Load Map
function blueMap() {
    // Generate Map
    var map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://api.maptiler.com/maps/hybrid/style.json?key=gafsgdxY5sUShTw4NmEL', // style URL
        center: [-122.2, 37.7], // starting position [lng, lat]
        zoom: 9.3
    });

    // Bart Stations
    const geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Balboa Park',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.447414,37.721981]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Glen Park',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.434092,37.732921]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': '24th St Mission',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.418466,37.752254]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': '16th St Mission',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.419694,37.765062]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Civic Center',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.413756,37.779528]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Powell St',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.406857,37.784991]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Montgomery St',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.401407,37.789256]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Embarcadero',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.396742,37.792976]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'West Oakland',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.294582,37.804675]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Lake Merritt',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.265609,37.797484]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Fruitvale',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.224274,37.774963]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Coliseum',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.197273,37.754006]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'San Leandro',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.161311,37.722619]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Bay Fair',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.126871,37.697185]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Castro Valley',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.075567,37.690754]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'West Dublin',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.928099,37.699759]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Dublin/Pleasanton',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.900367,37.701695]
                }
            }
        ]
    };

    map.on('load', () => {
        map.addSource('blue', {
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
            'id': 'blue-line',
            'type': 'line',
            'source': 'blue',
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

    geojson.features.forEach((marker) => { 

        const popup = new maplibregl.Popup({closeOnClick: true}).setText(
            marker.properties.message
        );

        // add marker to map
        new maplibregl.Marker()
            .setLngLat(marker.geometry.coordinates)
            .setPopup(popup)
            .addTo(map);
    });
}


