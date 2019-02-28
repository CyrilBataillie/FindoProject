<template>
    <div id="myMap"></div>
</template>

<script>
import iconDouche from '../static/markerDouche.png'
import iconEau from '../static/markerFontaine.png'
import iconLocker from '../static/markerLocker.png'
import iconToilettes from '../static/markerToilettes.png'

export default {
  name: 'hello',
  data () {
    return {
    }},
  mounted: function() {
        console.log("map: ", google.maps)
            this.map = new google.maps.Map(document.getElementById('myMap'), {
            center: {lat:48.855115, lng: 2.346535},
            scrollwheel: false,
            zoom: 15,
            overviewMapControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: false,
            styles: [
              {
                elementType : 'geometry',
                stylers:[
                  {color: '#dadfe1'}
                ]
              },
              {
                elementType : 'geometry',
                featureType: 'road',
                stylers:[
                  {color: '#ffffff'}
                ]
              },
              {
                elementType : 'geometry',
                featureType: 'water',
                stylers: [
                  {color: '#94d8ff'}
                ]
              },
              {
                featureType : 'poi',
                stylers: [
                  { visibility: 'off'}
                ]
              }
            ]
          }),
          this.marker = new google.maps.Marker({
            position: {lat:48.851807,  lng: 2.341797},
            map : this.map,
            title :'Douche ST GERMAIN',
            icon: iconDouche
          }),
          this.marker1 = new google.maps.Marker({
            position: {lat:48.854793,  lng: 2.345384},
            map : this.map,
            title :'Casier CITE',
            icon: iconLocker
          }),
          this.marker2 = new google.maps.Marker({
            position: {lat:48.85759,  lng: 2.351451},
            map : this.map,
            title :'Toilettes HOTEL DE VILLE',
            icon: iconToilettes
          }),
          this.marker2 = new google.maps.Marker({
            position: {lat:48.863164,  lng: 2.343452},
            map : this.map,
            title :'fontaine LES HALLES',
            icon: iconEau
          })
  }

}
</script>
<style scoped>
    #myMap {
      position: absolute;
      top: 0;
      left: 0;
      height:100%;
      width: 100%;
      z-index: 0;
   }
</style>
