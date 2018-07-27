<template>
    <div class="file-nav">
        <div
            v-for="nav in navs"
            :key="nav.id"
            :nav="nav"
            class="nav-list"
            :class="{active:type===nav.type}"
            @click="search(nav.type)">
            {{nav.title}}</div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name:"FilmNav",
        props:["nav"],
        data(){
            return {
                type:"now-playing",
                navs:[
                    {id:1, title:"正在热映", type:"now-playing"},
                    {id:2, title:"即将上映", type:"coming-soon"}
                ],
                page:1,
                count:7,
                films:[]
            };
        },
        methods:{
            search(type){
                this.type=type;
                let {page, count} = this;
                axios.get("/mz/v4/api/film/" + type, {
                    params:{
                        page,
                        count
                    }
                }).then(res=>{
                    this.films = res.data.data.films;
                    console.log(this.films);
                });

            }
        }
    }
</script>

<style scoped lang="scss">
    .file-nav {
		height: 46px;
	    margin: 0 auto;
	    border-bottom: solid #fe6e00 1px;

	    .nav-list {
	    	float: left;
		    width: 50%;
		    height: 100%;
		    text-align: center;
		    font-size: 16px;
		    line-height: 46px;
		    color: #6a6a6a;
		    cursor: pointer;

		    &.active {
		    	color: #fe6e00;
    			border-bottom: solid;
		    }
	    }
	}
</style>
