import Users from "@/api/users";

export default (context, inject) => {
 // Initialize API factories
 const factories = {
    users: Users(context.$axios),
 };

 // Inject $api
 inject("api", factories);
};