<template>
  <div class="login">
    <div class="avator">
      <img src="../../assets/images/avator.jpg" />
    </div>
    <formInput :inputList="inputList" />
    <div class="loginBtn" @click="login">登录</div>
    <div class="flex-between loginPassword">
      <router-link to>登录须知</router-link>
      <router-link to>忘记密码？</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import formInput from "../../components/formInput.vue";
export default {
  name: "Index",
  components: {
    formInput
  },
  data() {
    return {
      inputList: [
        {
          icon: require("../../assets/images/user.png"),
          text: "账号",
          verifyCode: false,
          value: ""
        },
        {
          icon: require("../../assets/images/password.png"),
          text: "密码",
          verifyCode: false,
          value: ""
        },
        {
          icon: require("../../assets/images/verify_code.png"),
          text: "验证码",
          verifyCode: true,
          value: ""
        }
      ]
    };
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this;
      let userToken='jksjiusghsyu12986fdkjhdfs90';
      if (this.inputList[0].value === '' || this.inputList[1].value  === '') {
        alert('账号或密码不能为空');
      } 
      // else {
      //   this.axios({
      //     method: 'post',
      //     url: '/user/login',
      //     data: _this.loginForm
      //   }).then(res => {
      //     console.log(res.data);
      //     _this.userToken = 'Bearer ' + res.data.data.body.token;
      //     // 将用户token保存到vuex中
      //     _this.changeLogin({ Authorization: _this.userToken });
      //     _this.$router.push('/home');
      //     alert('登陆成功');
      //   }).catch(error => {
      //     alert('账号或密码错误');
      //     console.log(error);
      //   });
      // }
      else{
        
        _this.changeLogin({ Authorization: userToken });
        _this.$router.push('/index');
         alert('登陆成功');
        
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.login {
  position: absolute;
  left: 0;
  z-index: 1;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.jpg) no-repeat 50% 50%;
  background-size: cover;
  
}
.avator {
  width: 32%;
  margin: 0 auto;
  padding-top: 30%;
  padding-bottom: 30px;
}
.avator img {
  border-radius: 50%;
}
.loginBtn {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #e1e7e6;
  height: 40px;
  line-height: 40px;
  box-sizing: 0px 1px 5px #e6e6e6;
  border-radius: 20px;
  color: #6b6c6c;
}
.loginPassword {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
}
.loginPassword a {
  color: #ffffff;
  font-size: 12px;
}
</style>