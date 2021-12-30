<template>
  <div class="login-form">
    <h1>登录</h1>
    <v-text-field label="用户名" v-model="username"></v-text-field>
    <v-text-field
      label="密码"
      v-model="password"
      type="password"
    ></v-text-field>
    <v-btn color="primary" @click="login()">登录</v-btn>
    <v-btn color="primary" text @click="register()">注册</v-btn>
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
      let post_data = {
        username: this.username,
        password: this.password,
      };
      this.$api.user.login(post_data).then((res) => {
        console.log(res);
        this.$notify({
          title: "成功",
          message: "登录成功",
          type: "success",
        });
        this.$router.push({
          name: "Login",
        });
      });
    },
    register() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
</style>