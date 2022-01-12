<template>
  <div>
    <a-form :model="user">
      <div class="md:flex md:w-1/4 block gap-4">
        <a-form-item label="First Name">
          <a-input
            v-model="user.first_name"
            v-decorator="[
              'first_name',
              {
                rules: [
                  { required: true, message: 'Please input your First Name!' },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="Last Name">
          <a-input
            v-model="user.last_name"
            v-decorator="[
              'last_name',
              {
                rules: [
                  { required: true, message: 'Please input your Last Name!' },
                ],
              },
            ]"
          />
        </a-form-item>
      </div>
      <div class="md:w-1/4">
        <a-form-item label="Email">
          <a-input
            v-model="user.email"
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: 'Please input your email!' },
                ],
              },
            ]"
          />
        </a-form-item>
      </div>
      <a-form-item>
        <a-button type="primary" :loading="loading" @click="onSubmit"
          >Edit</a-button
        >
        <NuxtLink to="/">
          <a-button style="margin-left: 10px"> Cancel </a-button>
        </NuxtLink>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props:[ 'userData' ],
  data: function () {
    return{
      loading: false,
    }
  },
  computed: {
    user: function () {
      return this.userData
    },  
  },  
  methods:{
    async onSubmit(){
      this.loading = true
      
      const response = await this.$api.users.editUser(this.user);

      this.$store.commit('users/saveLastUserEdited', this.user)
      this.$store.commit('users/editUser', this.user)

      setInterval(() => {
        this.loading = false
      }, 2000);
    }
  }
};
</script>

<style>
</style>