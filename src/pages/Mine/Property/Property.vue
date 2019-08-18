<template>
  <div class="page subpage">
    <div id="property">
      <app-header
        title="资产构成"
        :left="iconUrl"
        :leftAction="()=>this.$router.go(-1)"
        right="账单"
        :rightAction="()=>this.$router.push('/mine/property/bill')"
      />
      <div class="content">
        <div class="property-wrap" ref="echartswrap"></div>
        <div class="now-property">
          <p class="money">{{totalmoney}}</p>
          <p class="title">当前总资产(元)</p>
        </div>
        <ul class="balance-wrap border">
          <li class="account-balance border-right">
            <p class="name">账户余额</p>
            <p class="money">
              ￥
              <i>{{this.accountBalance}}</i>
            </p>
          </li>
          <li class="account-balance">
            <p class="name">冻结余额</p>
            <p class="money">
              ￥
              <i>{{this.blockBalance}}</i>
            </p>
          </li>
        </ul>
        <div class="btn">
          <span
            class="btn-item"
            v-for="item in btn"
            :key="item.id"
            @click="goAction(item.path)"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import echarts from "echarts";
// console.log(echarts);
export default {
  name: "property",
  data() {
    return {
      iconUrl: "/images/back.png",
      balance: [
        { id: 1, name: "账户余额", path: "/images/mine/doto1.png" },
        { id: 2, name: "冻结余额", path: "/images/mine/doto2.png" }
      ],
      btn: [
        { id: 1, name: "提现", path: "/mine/property/withdrawal" },
        { id: 2, name: "充值", path: "/mine/property/recharge" }
      ],
      accountBalance:100000.15,
      blockBalance:10000.18
    };
  },
  computed: {
    totalmoney(){
      return (this.accountBalance+this.blockBalance).toFixed(2)
    }
  },
  methods: {
    goAction(path) {
      this.$router.push(path);
      
    }
  },
  mounted() {
    let myChart = echarts.init(this.$refs.echartswrap);
    let option = {
      series: [
        {
          type: "pie",
          // radius 数组的第一项是内半径，第二项是外半径
          radius: ['60%','80%'],
          // center 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
          // 支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
          center: ['50%', '50%'],
          label: {
            show: false,
          },
          data: [
            { value: this.accountBalance, name: "账户余额" },
            { value: this.blockBalance, name: "冻结余额" }
          ]
        }
      ],
      color:['#1f7dfd','#cd69f2']
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
      // 控制台打印数据的名称
      console.log(params);
      params.event.stop;
  });
  }
};
</script>

<style lang="scss" scoped>
#property {
  width: 100%;
  height: 100%;
  background: #fff;
  .property-wrap {
    width: 100%;
    height: 7.1867rem;
    position: relative;
  }
  .now-property {
    text-align: center;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    .money {
      font-size: 0.64rem;
      font-weight: bold;
      color: #333333;
      margin-bottom: 0.2rem;
    }
    .title {
      font-size: 0.4rem;
      color: #999;
    }
  }
  .balance-wrap {
    display: flex;
    text-align: center;
    .account-balance {
      padding: 0.4rem 0;
      flex: 1;
      font-size: 0.48rem;
      &:nth-of-type(2) {
        .name {
          background: url("/images/mine/doto2.png") no-repeat 1.2rem center;
          background-size: 0.2rem 0.2rem;
        }
      }
      .name {
        margin-bottom: 0.3133rem;
        background: url("/images/mine/doto1.png") no-repeat 1.2rem center;
        background-size: 0.2rem 0.2rem;
      }
    }
    .block-balance {
      flex: 1;
    }
  }
  .btn {
    margin: 1.68rem 1.96rem 0;
    display: flex;
    justify-content: space-between;
    .btn-item {
      display: inline-block;
      width: 2.0533rem;
      height: 0.7867rem;
      line-height: 0.7867rem;
      text-align: center;
      background: rgba(31, 125, 253, 1);
      color: #fff;
      font-size: 0.4rem;
    }
  }
}
</style>
