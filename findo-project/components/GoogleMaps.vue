<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="myMap"></div>
  </div>
</template>

<script>
  import icon2 from '../static/markerDouche.png'
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
            icon: icon2
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
