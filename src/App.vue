<template>
    <div class="app">
         <Home/> 
    </div>
</template>

<script>
import Home from "./pages/Home/Home"
export default {
    components:{
        [Home.name]:Home
    }
}
</script>

<style>

</style>
