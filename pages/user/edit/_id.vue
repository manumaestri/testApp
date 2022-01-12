<template>
  <div class="md:px-12 px-6 py-5">
    <NuxtLink class="border px-2 py-1 shaodow-sm hover:shadow-md" to='/'>
      Go back
    </NuxtLink>    
    <h1 class="text-xl mt-6 border-t pt-5">Edit Single User</h1>
    <div>
      <div class="my-auto">
        <EditUser :userData="user" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      loading:false,
      user:{}
    }
  },  
  methods: {
     async getSingleUser(id) {
       //real axios call
       const response = await this.$api.users.getUsersById(id);
       this.user = response.data.data
       console.log(response)
    },

  },
  created() {
    const userId = this.$route.params.id;
    this.getSingleUser(userId)
  },  
}
</script>

<style>

</style>