var directory_marker_instances = {};
var map;

(function($) {
    $(document).ready(function() {

        // $.ajax({
        //     type: 'GET',
        //     url: siteUrl + '/json-posts.php',
        //     // data: { get_param: 'value' },
        //     dataType: 'json',
        //     success: function(data) {
        //         json = data;
        //     }
        // });

		// Map
        position = new google.maps.LatLng(51.559692, -0.70824),
        customStyle = 'custom_style';

		function initialize() {
            var featureOpts = [
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b2b3b5"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#b2b3b5"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ];

            var mapOptions = {
                zoom: 3,
                minZoom: 3,
                maxZoom: 15,
                center: new google.maps.LatLng(51.5074,0.1278),
        		// scrollwheel: false,
        		mapTypeControlOptions: {
        			mapTypeIds: [google.maps.MapTypeId.ROADMAP, customStyle]
        		},
        		mapTypeId: customStyle
        	};

			map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var styledMapOptions = {
                name: 'Title here'
            };

            // Looping through all the entries from the JSON data
            for(var i = 0; i < map_json.length; i++) {

              // Current object
              var obj = map_json[i];
              add_directory_marker(obj,i);

            }

			// google.maps.event.addListener(marker, 'click', function() {
			// 	infowindow.open(map, marker);
			// });

            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
            map.mapTypes.set(customStyle, customMapType);
		}

		if ($('#map').length > 0) {
			google.maps.event.addDomListener(window, 'load', initialize);

			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});
		}
	});
})(jQuery);

function add_directory_marker(obj, index) {

    var contentString = '<div class="map-content">' +
          '<h2><strong>'+obj.post_title+'</strong></h2>' +
          '<p><i class="fa fa-phone"></i> '+obj.tel_no+'<br />' +
          '<i class="fa fa-envelope-o"></i> <a href="mailto:'+obj.email_address+'">'+obj.email_address+'</a></p>' +
      '</div>';

      var image = {
          url: siteUrl + '/img/marker.png',
          size: new google.maps.Size(35, 35),
          scaledSize: new google.maps.Size(35, 35)
      };

	directory_marker_instances[index] =
        new google.maps.Marker({
            position: new google.maps.LatLng(obj.latitude,obj.longitude),
            animation: google.maps.Animation.DROP,
            map: map,
            icon: image,
            title: obj.post_title // this works, giving the marker a title with the correct title
        }
	);

	google.maps.event.addListener(directory_marker_instances[index], "click", function(e) {
        map.panTo(new google.maps.LatLng(obj.latitude,obj.longitude));
		show_marker_info(
			map,
			directory_marker_instances[index],
			contentString,
			obj.latitude,
			obj.longitude
		);
	});

}

function show_marker_info(map, marker_instance, html, lat, lng) {

	var offset = {
		width:0,
		height:-20,
		widthUnit:'px',
		heightUnit:'px'
	};

	info_window_instance = new google.maps.InfoWindow({
		content: html,
		position: { lat: lat * 1, lng: lng * 1}/*,
		pixelOffset: offset*/
	});

    for (var i = 0; i < info_window_instance.length; i++) {
      info_window_instance[i].close();
    }
    info_window_instance.open(map, marker_instance);
    // info_window_instance[].open(map, marker_instance);
}

function directory_init_location() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				current_position = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
			}
		);
	}
}
