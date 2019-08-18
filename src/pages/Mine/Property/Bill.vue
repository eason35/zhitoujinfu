<template>
  <div class="page subpage" id="bill">
    <app-header title="账单" :left="iconUrl" :leftAction="()=>this.$router.go(-1)"/>
    <div class="title">
      <div class="month" @click="showDate">
        <span v-text="yearmonth">{{yearmonth}}</span><i class="icon"><img src="/images/mine/list.png" alt=""></i>
      </div>
      <ul class="total">
        <li class="expense"><span>支出 ￥</span><i>1000.00</i></li>
        <li class="earning"><span>收入 ￥</span><i>1000.00</i></li>
      </ul>
    </div>
    <app-scroll class="content">
      <ul class="bill-detail">
        <li class="bill-item border-bottom" v-for="item in billData" :key="item.id">
          <div class="pic"><img :src="item.bankImg" alt=""></div>
          <div class="detail">
            <div class="ways">
              <span>{{item.way}}</span><i>{{item.money}}</i>
            </div>
            <div class="data">
              <span>{{item.data}}</span><i>{{item.time}}</i>
            </div>
          </div>
        </li>
      </ul>
    </app-scroll>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :formatter="formatter"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script>
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
export default {
  name:"bill",
  components: {
    [DatetimePicker.name]:DatetimePicker,
    [Popup.name]:Popup
  },
  data () {
    return {
      iconUrl:"/images/back.png",
      billData:[
        {id:1, bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'充值',data:'今天',time:'07:00',money:'1000.00'},
        {id:2,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'充值',data:'今天',time:'07:00',money:'1000.00'},
        {id:3,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:4,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'充值',data:'今天',time:'07:00',money:'1000.00'},
        {id:5,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:6,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:7,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:8,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:9,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:10,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:11,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:12,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:13,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:14,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:15,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:16,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
        {id:17,bank:'中国邮政',bankImg:'/images/mine/chinapost.png',way:'提现',data:'今天',time:'07:00',money:'1000.00'},
      ],
      currentDate: new Date(),
      show:false,
      // 默认是本月
      yearmonth:'本月'
    }
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}`;
      } else if (type === 'month') {
        return `${value}`
      }
      return value;
    },
    // 点击完成按钮获取当前时间
    confirm(value){
      let year = value.getFullYear();
      let month = value.getMonth()+1;
      this.yearmonth = `${year}-${month}`;
      this.show=false; 
    },
    // 点击取消按钮的事件
    cancel(){
      this.show=false; 
    },
    showDate(){
      this.show=true;
    }

  }
}
</script>

<style lang="scss" scoped>
#bill{
  .title{
    margin-top: 1.1733rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.0667rem;
    padding: 0 0.5333rem;
    .month{
      span{
      font-size: 0.3733rem;
      margin-right:0.16rem; 
      }
      .icon{
        display: inline-block;
        height: 0.1867rem;
        width: 0.0933rem;
        transform: rotate(90deg);
        line-height: 0.2733rem;
        img{
          height: 100%;
        }
      }
    }
    .total{
      font-size:0.32rem;
      color: #333;           
    }

  }
  .content{
    top:2.24rem;
    .bill-detail{
      margin: 0 0.5333rem;
      .bill-item{
        display: flex;
        align-items: center;
        height: 1.3867rem;
        font-size: 0.2667rem;
        .pic{
          height: 0.8rem;
          margin-right: 0.2rem;
          img{
            height: 100%;
          }
        }
        .detail{
          flex: 1;
          .ways{
            display: flex;
            justify-content: space-between;
            padding-bottom: 0.1333rem;
          }
        }
      }
    }
  }
}


</style>
<style lang="scss">
.van-picker__columns{
  margin: 0 3rem;
  .van-picker-column{
    margin-right: 0.0633rem;
    .van-ellipsis.van-picker-column__item.van-picker-column__item--selected{
      border-bottom: 0.0533rem solid #1F7DFD;
    }
  }
}
</style>