<template>
  <div class="md:px-12 px-6 py-5">
    <NuxtLink class="border px-2 py-1 shaodow-sm hover:shadow-md" to='/'>
      Go back
    </NuxtLink>    
    <h1 class="text-xl mt-6 border-t pt-5">Single User View</h1>
    <div class="flex">
      <img class="rounded-full" :src="user ? user.avatar : 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png' " alt="">
      <div class="list-none px-5 my-auto">
        <li><b>DNI:</b> {{user.id}}</li>
        <li><b>Complete Name:</b> {{user.first_name + ' ' + user.last_name}} </li>
        <li><b>Email:</b> {{user.email}}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){

    return {
      user:[]
    }
  },
  methods: {
    async getSingleUser(id) {
      const response = await this.$api.users.getUsersById(id);
      this.user = response.data.data
    }
  },
  mounted() {
    this.getSingleUser(this.$route.params.id)
  }
}
</script>

<style>

</style>