<template>
  <div class="register">
    <h1>注册</h1>
    <v-text-field v-model="username" label="用户名"></v-text-field>
    <v-text-field
      v-model="password"
      label="密码"
      type="”password“"
    ></v-text-field>
    <v-btn color="primary" @click="register()"> 注册 </v-btn>
    <v-btn color="primary" text @click="login()"> 返回登录 </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    register() {
      let post_data = {
        username: this.username,
        password: this.password,
      };
      this.$api.user.register(post_data).then((res) => {
        console.log(res);
        this.$notify({
          title: "成功",
          message: "注册成功",
          type: "success",
        });
        this.$router.push({
          name: "Login",
        });
      });
    },
  },
};
</script>

<style scoped>
.sign-up {
  width: 400px;
  text-align: center;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
}
</style>
