<template>
  <div class="page subpage" id="authentication">
      <app-header title="实名认证" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
      <div class="content">
        
        <component :is="isRealName"></component>
        
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import NotRealName from './children/NotRealName';
import RealNamePass from './children/RealNamePass';
export default {
    name:'authentication',
    data () {
      return {
        iconUrl:"/images/back.png",
      }
    },
    components:{
      [RealNamePass.name]:RealNamePass,
      [NotRealName.name]:NotRealName
    },
    computed: {
      ...mapState({
        RealName:state=>state.mine.isRealName
      }),
      isRealName(){
        switch (this.RealName) {
          case true:
           return "real-name-pass";
          case false:
            return "not-real-name";
        }
      }
    }
}
</script>

<style lang="scss" scoped>
#authentication{
  .content{
    position: absolute;
    left: 0;
    top:1.1733rem;
    bottom: 0;
    width: 100%;
  }
}
</style>