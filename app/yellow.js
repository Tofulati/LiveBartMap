// YELLOW
document.getElementById("yellowButton").onclick = yellowMap();

var re = document.getElementById("yellowButton");
if (re.addEventListener)
    re.addEventListener("click", yellowMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', yellowMap);

// Show Details
function showY() {
    var text = document.getElementById("yDetail");
    text.style.display = "block";
    document.getElementById("gDetail").style.display = "none";
    document.getElementById("oDetail").style.display = "none";
    document.getElementById("rDetail").style.display = "none";
    document.getElementById("bDetail").style.display = "none";
}

function yellowMap() {
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
                    'message': 'Rockridge',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.251793,37.844601]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Orinda',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.183791,37.878361]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Lafayette',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.123801,37.893394]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Walnut Creek',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.056013,37.928403]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Pleasant Hill',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.056013,37.928403]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Martinez',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.024597,38.003275]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Pittsburg',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.945154,38.018914]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Pittsburg Center',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.889062,38.016847]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Antioch',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.8162,38.0178]
                }
            }
        ]
    };

    map.on('load', () => {
        map.addSource('yellow', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [-121.8162,38.0178],
                        [-121.889062,38.016847],
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
            'id': 'yellow-line',
            'type': 'line',
            'source': 'yellow',
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