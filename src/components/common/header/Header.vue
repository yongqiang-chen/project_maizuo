<template>
    <header>
        header
        <nav-list></nav-list>
    </header>
</template>

<script>
    import NavList from "./NavList.vue";
    export default {
        name: "Header",
        data() {
            return {}
        },
        components: {
            NavList
        }
    };
</script>

<style scoped lang="scss">

</style>