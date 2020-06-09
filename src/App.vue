<template>
    <h1 style="margin-top: 128px;text-align: center;">{{msg}}</h1>
</template>

<script>
    import { ref } from 'vue'

    export default {
        setup () {
            return {
                msg: ref('Hello world'),
            }
        },
    }
</script>

<style>
    @import "~@/css/reset.css";
    @import "~@/css/variable.css";
    #app {
        color: $fontColor;
    }
</style>
