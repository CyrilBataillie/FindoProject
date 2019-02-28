<template>
    <div class="navigation">
        <h3>MENU</h3>
        <div class="menu-items">
            <nuxt-link v-for="item, i in items" :key="i" :to="item.to" class="menu-item">
                {{ item.label }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style>
    .navigation {
        padding: 20px;
    }

    .navigation h3 {
        margin-bottom: 0.6em;
    }

    .menu-items {
    }
    
    .menu-item {
        display: block;
        margin-bottom: 20px;
    }
</style>
