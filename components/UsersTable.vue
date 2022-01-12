<template>
  <div class="md:px-12 px-6 py-4">
    <a-table 
        v-if="users"
        :scroll="{ x: 1200, y: 300 }" 
        :columns="columns" 
        :data-source="users"
        :pagination="pagination"
        bordered
      > 
      
      <span slot="action" slot-scope="text, record">
          <NuxtLink :to="`/user/${record.id}`"> View </NuxtLink> 
            <a-divider type="vertical" />        
          <NuxtLink :to="`/user/edit/${record.id}`"> Edit </NuxtLink>
            <a-divider type="vertical" />
          <a @click="deleteUser(record)">Delete</a>
      </span>  
    </a-table>
  </div>
</template>

<script>
export default { 
 computed:{
    users(){
      return this.$store.state.users.users
    },
 },  
 data() {
  return {
      // usersData: [],
			pagination: {
				pageSize: 3,
				showSizeChanger: true, // La pantalla puede cambiar el número de cada página
				pageSizeOptions: ['10', '20', '30', '40'],
				showTotal: total => `${total} total users`,
				showSizeChange: (current, pageSize) => this.pageSize = pageSize,  
			},      
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },        
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'First Name',
          dataIndex: 'first_name',
          key: 'first_name',
        },
        {
          title: 'Last Name',
          dataIndex: 'last_name',
          key: 'last_name',
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ]     
    };
 },
 methods: {
  async deleteUser(user) {
    await this.$api.users.deleteUser(user.id);
    this.$store.commit('users/saveLastUserDeleted', user)    
    this.$store.commit('users/deleteUser', user.id)    
  }
 }
};
</script>