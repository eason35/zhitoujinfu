<template>
    <div class="page subpage" id="info">
        <app-header title="信息披露" :left="imgUrl" :leftAction="handleback"/>
        <div class="info-content border-top">
            <ul class="info-title">
                 <li @click="handleChange(index)" class="title-item" v-for="(item,index) in titleList" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
        <component :is="currentView"></component>
    </div>
</template>

<script>
import AppHeader from '../../components/Header'
import Matter from '../Home/Matter'
import Record from '../Home/Record'
import Business from '../Home/Business'
export default {
    components:{
        [AppHeader.name]:AppHeader,
        [Matter.name]:Matter,
        [Record.name]:Record,
        [Business.name]:Business
        
    },
    data(){
        return {
            titleList:[{id:1,name:'备案信息'},{id:2,name:'经营信息'},{id:3,name:'重大事项'}],
            center:2,
            imgUrl:'/images/home/back.png'
        }
    },
    computed:{
        currentView(){
            switch (this.center) {
                case 1:
                   return 'record'
                case 3:
                    return 'matter'
                case 2:
                    return 'business'
                default:
                    return 'business'
            }
        }
    },
    methods:{
        handleback(){
            this.$router.go(-1);
        },
        handleChange(index){
            if(index===1){
                return ;
            }else if(index===0){
                //如果点的是最前面的一个,把数组最后一个截取下来放到第一个
                let newArr = this.titleList.filter((item,i)=>(i!==2));
                newArr.unshift(...this.titleList.splice(2,1));
                this.titleList = newArr;
                
            }else{
                //如果点的是最后面的一个,把数组第一个截取下来放到最后一个
                let newArr = this.titleList.filter((item,i)=>(i!==0));
                newArr.push(...this.titleList.splice(0,1));
                this.titleList=newArr;
            }
            //当前，index为1的元素的id
            this.center=this.titleList.filter((it,num)=>(num===1))[0].id;
        }
    },
    
}
</script>

<style lang="scss" scoped>
    #info{
        .info-content{
            position:absolute;
            left:0;
            top:1.1733rem;
            width:100%;
            .info-title{
                height:1.2rem;
                padding:0 1.7867rem;
                display:flex;
                justify-content: space-between;
                align-items: center;
                .title-item{
                    height:0.3733rem;
                    font-size:0.4rem;
                    font-family:"PingFang-SC-Medium";
                    font-weight:500;
                    color:rgba(153,153,153,1);
                    line-height:0.2667rem;
                    &:nth-of-type(2){
                        height:0.4133rem;
                        font-size:0.4267rem;
                        font-family:"PingFang-SC-Bold";
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                        
                    }
                }
                &::after{
                    content:"";
                    text-align:center;
                    position:absolute;
                    left:50%;
                    transform:translateX(-50%);
                    bottom:0;
                    width:0.4533rem;
                    border-bottom:solid 0.0533rem blue;
                }
            }
        }
    }
</style>