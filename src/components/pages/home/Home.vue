<template>
    <div class="home page">
        <!-- 轮播 -->
        <banner></banner>
        
        <!-- 内容 -->
        <!-- <movie-box></movie-box> -->
    </div>
</template>

<script>
    import Banner from "./Banner.vue";
	// import MovieBox from "./MovieBox.vue";
    export default {
        name: "Home",
        data() {
            return {}
        },
        components:{
            Banner
        }
    };
</script>

<style scoped>

</style>