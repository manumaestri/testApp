export const state = () => ({
    users:[],
    lastUserEdited: {},
    lastUserDeleted: {},
})

export const mutations = {
    saveInitialUsers(state, data){
        state.users = data
    },    
    saveLastUserEdited(state, userEdited) {
        state.lastUserEdited = userEdited
    },
    saveLastUserDeleted(state, userDeleted) {
        state.lastUserDeleted = userDeleted
    }, 
    deleteUser(state, userId) {
        state.users = (state.users).filter((o) => o.id !== userId)
    },
    editUser(state, userData) {
        state.users = state.users.map(obj => [userData].find(o => o.id === obj.id) || obj)
    },    
}

 export const getters = {
     getUsers: (state) => {
        return state.users
    }, 
     getUserById(state, id) {
        return (state.users).find(o => o.id === id)
    }     
 }

// export const actions = {

// }

