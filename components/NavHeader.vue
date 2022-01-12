<template>
  <NuxtLink to="/">
    <div class="border-b grid grid-cols-4 md:px-12 px-6 pt-2 pb-0 bg-black">
      <div class="my-auto">
        <img src="https://fligoo.com/assets/images/logos/fligoo-logo.svg" alt="">
        <p class="text-white text-xs">App Assessment</p>
      </div>
      <div class="md:ml-auto md:col-span-0 col-span-3 my-auto">
        <h3 class="text-white text-md">Extra information</h3>
        <p class="text-white text-xs">Last User Edited: {{lastUserEdited.first_name ? lastUserEdited.first_name : 'None'}}</p>
        <p class="text-white text-xs">Last User deleted: {{lastUserDeleted.first_name ? lastUserDeleted.first_name : 'None'}}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default{
  computed:{
    lastUserEdited(){
      return this.$store.state.users.lastUserEdited
    },
    lastUserDeleted(){
      return this.$store.state.users.lastUserDeleted
    }        
  }
}
</script>


<style>
.nuxt-logo {
  height: 180px;
}
</style>
