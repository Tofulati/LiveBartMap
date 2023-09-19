// ORANGE
document.getElementById("orangeButton").onclick = orangeMap();
// document.getElementById("orangeButton").onclick = function() { alert('Hello!')};

var re = document.getElementById("orangeButton");
if (re.addEventListener)
    re.addEventListener("click", orangeMap, false);
else if (re.attachEvent)
    re.attachEvent('onclick', orangeMap)

// Show Details
function showO() {
    var text = document.getElementById("oDetail");
    text.style.display = "block";
    document.getElementById("gDetail").style.display = "none";
    document.getElementById("bDetail").style.display = "none";
    document.getElementById("rDetail").style.display = "none";
    document.getElementById("yDetail").style.display = "none";
}

function orangeMap() {
    // var map = new maplibregl.Map({
    //     container: 'map', // container id
    //     style: 'https://api.maptiler.com/maps/hybrid/style.json?key=gafsgdxY5sUShTw4NmEL', // style URL
    //     center: [-122.2, 37.7], // starting position [lng, lat]
    //     zoom: 9.3
    // });

    // Bart Stations
    const geojson = {
        'type': 'FeatureCollection',
        'features': [
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

    map.addSource('orange', {
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
                    [-121.9772135,37.5567286],
                    [-121.940,37.503],
                    [-121.891745,37.409768],
                    [-121.8746546,37.3683606]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'orange-line',
        'type': 'line',
        'source': 'orange',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#faa61a',
            'line-width': 3
        }
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