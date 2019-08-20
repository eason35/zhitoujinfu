<template>
<div class="binding page subpage">
  <div class="page subpage" id="binding">
       <app-header title="第三方账号绑定" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
  </div>
    <binding-renz/>



</div>
</template>

<script>
import Header from '../../../components/Header'
import Renz from './children/Renz'
export default {
  name:'binding',
  components:{
    [Header.name]:Header,
    [Renz.name]:Renz,

  },
  data(){
    return{
      iconUrl:"/images/back.png",
     
    }
  }
}
</script>
<style lang="scss" scoped>
  .item{
    .list{
      position: absolute;
    top:44px;
    left:0px;
    }

  }


</style>