Map = {
  markers: [],
  newHitReceived: function(data) {
    var latLng = new google.maps.LatLng(data.lat, data.lng);

    var marker = new StyledMarker({
      styleIcon: new StyledIcon(
        StyledIconTypes.BUBBLE,
        {
          color:"fff",
          text: "€" + data.amount
        }),
      position: latLng,
      map: Map.google_map,
      animation: google.maps.Animation.DROP,
      created_at: new Date()
    });
    Map.markers.push(marker);

  },
  google_map: null,

  createMap: function() {
    if (Map.google_map == null) {
      layer = "watercolor"
      var mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(35,13),
        mapTypeId: layer
      };

      Map.google_map = new google.maps.Map(document.getElementById("map"), mapOptions);
      Map.google_map.mapTypes.set(layer, new google.maps.StamenMapType(layer));
    }
  }
}


function isOlderThan24hours(date){
  now = new Date();
  diff = now.getTime() - date.getTime();

  one_day = 1000 * 60 * 60 * 24;

  return (diff > one_day)
}