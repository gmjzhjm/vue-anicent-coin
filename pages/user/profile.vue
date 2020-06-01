<template>
  <div class="profile">
    <titleBar msg="账号设置" />
    <div class="pb-40"></div>
    <van-form @submit="saveProfile">
      <van-field name="uploader" label="头像">
        <template #input>
          <van-uploader v-model="uploader" :max-count="1" />
        </template>
      </van-field>
      <van-field
        v-model="username"
        name="姓名"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="tel"
        type="tel"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        readonly
        clickable
        name="生日"
        label="生日"
        :value="birthValue"
        placeholder="选择生日"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          @confirm="onDateConfirm"
          @cancel="showPicker = false"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="地址"
        label="地址"
        :value="cityValue"
        placeholder="选择城市"
        @click="showCityPicker = true"
      />
      <van-popup v-model="showCityPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showCityPicker = false"
          @confirm="onCityConfirm"
        />
      </van-popup>
      <div style="margin: 16px;">
        <van-button round block type="info" class="saveBtn" native-type="submit">保存</van-button>
        <van-button round block type="default" class="cancelBtn" native-type="reset">重置</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import titleBar from "../../components/titleBar.vue";
import cityJson from "../../assets/js/city.json";
export default {
  name: "profile",
  components: {
    titleBar
  },
  data() {
    return {
      uploader: [{ url: require("../../assets/images/avator.jpg") }],
      username: "",
      tel: "",
      birthValue: "",
      cityValue: "",
      columns: eval(cityJson).provinces,
      showPicker: false,
      showCityPicker: false,
      minDate: new Date(1920, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onDateConfirm(date) {
      this.showPicker = false;
      this.birthValue = this.formatDate(date);
    },
    onCityConfirm(value) {
      this.showCityPicker = false;
      for (let i = 0; i < value.length; i++) {
        this.cityValue += value[i] + " ";
      }
      // this.cityValue=value
      console.log(eval(cityJson));
    },
    saveProfile(values) {
      if(!values.uploader[0].url){
        console.log(values.uploader[0].content);
      }
      
      // if (this.username == "") {
      //   alert("qshuru");
      // }
      // alert("保存成功");
      // window.location.href = "/user/gmj";
    },
    cancelProfile() {
      this.username = "";
      this.tel = "";
      this.birthValue = "";
      this.cityValue = "";
      window.location.href = "/user/gmj";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  width: 100%;
  text-align: left;
}
.pb-40 {
  padding-bottom: 40px;
}
.flex-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.avator-upload {
  width: 94%;
  margin: 8px auto;
}
.arrow {
  height: 60px;
  line-height: 60px;
}
.avator-upload .arrow img {
  width: 14px;
}
.saveBtn{height: 35px;line-height: 35px;}
.cancelBtn {
  height: 35px;line-height: 35px;
  margin-top: 10px;
}
</style>