<template>
  <UsersTable/>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    async getData() {
      //fijarse si esta empty, si no trae nuevos users
      if (!(this.$store.state.users.users).length) {
        const response = await this.$api.users.getUsers();
        this.$store.commit('users/saveInitialUsers', response.data.data)            
      } else {
        this.$store.commit('users/saveInitialUsers', response.data.data)            
      }
    }, 
  },
  created(){
    this.getData()
  }
}
</script>
