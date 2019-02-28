<template>
    <section class="map">
        <googleMaps/>
    </section>
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
</style>
