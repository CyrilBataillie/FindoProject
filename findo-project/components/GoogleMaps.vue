<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="myMap"></div>
  </div>
</template>

<script>
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
            zoom: 4
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