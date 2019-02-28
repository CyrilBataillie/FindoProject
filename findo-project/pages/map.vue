<template>
<div>
    <section class="map">
        <googleMaps/>
    </section>


  <div class="circle">
    <span style="font-size: 40px; color:#ffffff; margin: 20px; padding-top: 6px; position: fixed; bottom: 0px;"><icon name="tint"/></span>
  </div>
  <div class="circle" style="background-color: #175CCC; left: 90px">
    <span style="font-size: 40px; color:#ffffff; margin: 20px; padding-top: 6px; position: fixed; bottom: 0px;"><icon name="shower"/></span>
  </div>
  <div class="circle" style="background-color: #1a2999; left: 180px">
    <span style="font-size: 40px; color:#ffffff; margin: 10px; margin-bottom: 19px; position: fixed; bottom: 0px;"><icon name="restroom"/></span>
  </div>
  <div class="circle" style="background-color: #ff7743; left: 270px">
    <span style="font-size: 40px; color:#ffffff; margin: 10px; margin-left: 17px; margin-bottom: 19px; position: fixed; bottom: 0px;"><icon name="lock"/></span>
  </div>

</div>

</template>

<script>
    import GoogleMaps from '@/components/GoogleMaps'

    export default {
        components: {
            'googleMaps': GoogleMaps,
        },
    }
</script>

<style>
.map {
    position: absolute;
    top: -64px;
    left: 0;
    bottom: 0;
    right: 0;
}
.circle{
display: block;
width: 70px;
height: 70px;
margin: 10px auto;
background-color: #93d7ff;
border-radius: 50%;
z-index: 500;
position: fixed;
bottom: 0px;
margin-left: 20px;
box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.35);
}
</style>
