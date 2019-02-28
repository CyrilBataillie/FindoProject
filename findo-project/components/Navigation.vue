<template>
    <div class="navigation">
        <h3>MENU</h3>
        <div class="menu-items" @click="closeMenu">
            <nuxt-link v-for="item, i in items" v-touchfeedback :key="i" :to="item.to" class="menu-item">
                {{ item.label }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    
    export default {
        data() {
            return {
                items: [{
                        to: '/',
                        label: 'Dashboard'
                    },
                    {
                        to: {
                            name: 'profile'
                        },
                        label: 'Profile'
                    },
                ]
            }
        },
        methods: {
            ...mapMutations({
                closeMenu: 'ui/closeMenu',
            })
        },
    }
</script>

<style>
    .navigation {
        padding: 20px;
    }
    
    .navigation h3 {
        margin-bottom: 0.6em;
    }
    
    .menu-items {}
    
    .menu-item {
        display: block;
        margin-bottom: 20px;
        font-weight: bold;
        text-decoration: none;
        color: #000;
    }
    
    .menu-item:hover,
    .menu-item.is-touch {
        color: #AEAEAE;
    }
    
    .menu-item.nuxt-link-exact-active {
        color: #5B8A56;
    }
</style>
