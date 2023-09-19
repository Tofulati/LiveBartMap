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
                    'message': 'Hayward',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.087967,37.670399]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'South Hayward',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.057551,37.6348]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Union City',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-122.017867,37.591208]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Fremont',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.9764,37.557355]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Warm Springs',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.940,37.503]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Milpitas',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.891745,37.409768]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'message': 'Berryessa',
                    'iconSize': [40, 40]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-121.8746546,37.3683606]
                }
            }
        ]
    };

    map.on('load', () => {
        map.addSource('route', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        [-121.8746546,37.3683606],
                        [-121.891745,37.409768],
                        [-121.940,37.503],
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