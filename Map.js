var lat; //variable's to store the latitude which is coming from the ajax
var lng;  //variable's to store the longitude which is coming from the ajax

//ajax request for getting the user's current location.
$.ajax({
  url: "https://geoip-db.com/jsonp", //url form the location will fetch.
  jsonpCallback: "callback", //callback.
  dataType: "jsonp",  //data will be in json format
  success: function( location ) {
    //if the request will be successfully fulfilled then we will store the values in these variables.
      lat = location.latitude;
      lng = location.longitude;  
      // console.log(lat, lng);
  }
});  

let map; //accessing the map element from the front end.

function initMap() {
  //function will run to render the location into the map.
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng }, //location data.
    zoom: 8, //zoom amount.
  });
};
