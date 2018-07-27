<template>
    <div class="films page">
        <film-nav></film-nav>
        <film-box></film-box>
    </div>
</template>

<script>
    import FilmNav from "./FilmNav.vue";
    import FilmBox from "./FilmBox.vue";
    export default {
        name:"Films",
        components:{
            FilmNav,
            FilmBox
        }
    }
</script>

<style scoped lang="scss">
    .films {
		padding-left: 15px;
	    padding-right: 15px;
	    background-color: #f9f9f9;
	    width: 100%;
	    position: absolute;
	    min-height: 100%;
	}
</style>
