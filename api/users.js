export default axios => ({
  getUsers() {
    return axios.get("https://reqres.in/api/users");
  },
  getUsersById(id) {
    return axios.get(`https://reqres.in/api/users/${id}`);
  },  
  editUser(userData) {
    return axios.put(`https://reqres.in/api/users/${userData.id}`, { userData });
  },
  deleteUser(id) {
    return axios.delete(`https://reqres.in/api/users/${id}`);
  }  
 });