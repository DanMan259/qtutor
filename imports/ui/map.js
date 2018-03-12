import { Template } from 'meteor/templating';
import './map.html'

Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  mapOptions: function() {
    var latLng = Geolocation.latLng();
    if (GoogleMaps.loaded()) {
      if(latLng) {
      return {
        center: new google.maps.LatLng(latLng.lat, latLng.lng),
        zoom: 16,
        disableDefaultUI: true
      };
      }else{
        return {
          center: new google.maps.LatLng(44.228, -76.494),
          zoom: 16,
          disableDefaultUI: true
          };
        }
    }
    marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng.lat, latLng.lng),
          map: map.instance
        });
  }
});
Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
     console.log("I'm ready!");
  });
});
