<template>
    <div class="file-box">
       盒子
       <film-item></film-item>
    </div>
</template>

<script>
    import FilmItem from "./FilmItem.vue";
    export default {
        name:"FilmBox",
        components:{
            FilmItem
        }
    }
</script>

<style scoped lang="scss">

</style>
