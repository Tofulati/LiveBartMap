// RED
document.getElementById("redButton").onclick = redMap();
// document.getElementById("redButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("redButton");
if (re.addEventListener)
    re.addEventListener("click", redMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', redMap)

// Show Details
function showR() {
    var text = document.getElementById("rDetail");
    text.style.display = "block";
    document.getElementById("gDetail").style.display = "none";
    document.getElementById("oDetail").style.display = "none";
    document.getElementById("bDetail").style.display = "none";
    document.getElementById("yDetail").style.display = "none";
}

function redMap() {
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
                    'message': 'Daly City',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.469081,37.706121]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Colma',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.466233,37.684638]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'South San Francisco',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.444116,37.664174]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'San Bruno',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.416038,37.637753]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'SFO',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.392612,37.616035]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Oakland City Center',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.271604,37.803664]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Oakland',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.269029,37.80787]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'MacArthur',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.267227,37.828415]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Ashby',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.26978,37.853024]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Downtown Berkeley',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.268045,37.869867]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'North Berkeley',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.283451,37.87404]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'El Cerrito Plaza',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.299272,37.903059]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'El Cerrito del Norte',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.317269,37.925655]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Richmond',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.353165,37.936887]
                }
            }
        ]
    };

    map.on('load', () => {
        map.addSource('red', {
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
            'id': 'red-line',
            'type': 'line',
            'source': 'red',
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