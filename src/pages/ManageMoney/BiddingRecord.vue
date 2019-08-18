<template>
    <div class="page subpage" id="bidding-record">
        <app-header style="background:#2A89FA" title="投标记录" left="/images/back.png" :leftAction="handleClick"/>
        <div class="bg-blue">
            <div class="percent">
                <p>近一个月用户投资金额分布占比</p>
                <div class="pie" ref="pie">

                </div>
            </div>
        </div>
        <div class="record-content">
            <div class="record-title">
                <img src="/images/manage/record_month.png"/><span>近一个月的投标记录</span>
            </div>
            <record-list :listData="list" />
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header'
import echarts from 'echarts'
import RecordList from './children/RecordList'

export default {
    components:{
        [Header.name]:Header,
        [RecordList.name]:RecordList
    },
    data(){
        return {
            list:[
                {picUrl:'/images/manage/touxiang.png',name:'杨**',time:'2019-08-17 10:40:45',money:2000},
                {picUrl:'/images/manage/touxiang.png',name:'杨**',time:'2019-08-17 10:40:45',money:2000},
                {picUrl:'/images/manage/touxiang.png',name:'杨**',time:'2019-08-17 10:40:45',money:2000},
                {picUrl:'/images/manage/touxiang.png',name:'杨**',time:'2019-08-17 10:40:45',money:2000},
                {picUrl:'/images/manage/touxiang.png',name:'杨**',time:'2019-08-17 10:40:45',money:2000},
                {picUrl:'/images/manage/touxiang.png',name:'杨**',time:'2019-08-17 10:40:45',money:2000},
                {picUrl:'/images/manage/touxiang.png',name:'杨**',time:'2019-08-17 10:40:45',money:2000}
            ]
        }
    },
    methods:{
        handleClick(){
            this.$router.go(-1);
        }
    },
    mounted(){
                var myChart = echarts.init(this.$refs.pie);
                myChart.setOption({
                    tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                    orient: 'left',
                    x: '160px',
                    y:'middle',
                    itemGap:10,
                    
                    data:['>=10万元','5万元-10万元','1万元-5万元','<=1万元']
                    },
                    color:['#FE9707','#A2E27C','#834EF8','#4C6FFF','blue'],
                    series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        center:['20%','50%'],
                        avoidLabelOverlap: false,
                        label: {
                            
                            normal: {
                                show: false,
                                position: 'center',
                                color:'#333'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        animation: true,
                        data:[
                            {value:330, name:'>=10万元'},
                            {value:310, name:'5万元-10万元'},
                            {value:234, name:'1万元-5万元'},
                            {value:135, name:'<=1万元'}
                        ]
                    }
                ]
            // };
                })
    }
}
</script>

<style lang="scss" scoped>
    #bidding-record{
       .bg-blue{
           width:100%;
           background:#2A89FA;
           position:absolute;
           left:0;
           height:4.7067rem;
           top:1.1733rem;
           .percent{
               width:100%;
               position:absolute;
               top:0.8rem;
               height:5.3867rem;
               width:8.9333rem;
               left:50%;
               transform: translateX(-50%);
               background:#fff;
               box-shadow:0rem 0.0533rem 0.36rem 0rem rgba(71,70,70,0.2);
               border-radius:0.1333rem;
               p{
                   text-align:center;
                   padding-top:0.4rem;
                    height:0.3067rem;
                    font-size:0.32rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:0.2667rem;
                 }
               .pie{
                   height:3.9067rem;
                   width:100%;
                   margin-top:0.4rem;
               }
           }
       } 
        .record-content{
            margin-top:7.56rem;
            padding:0 0.5333rem;
            .record-title{
                height:1.7867rem;
                line-height:1.7867rem;
                font-size:0.4533rem;
                font-family:'PingFang-SC-Medium';
                font-weight:500;
                color:rgba(51,51,51,1);
                // line-height:1.7867rem;
                img{
                    height:0.4933rem;
                    width:0.4933rem;
                    vertical-align: middle;
                }
            }
        }
    }

</style>