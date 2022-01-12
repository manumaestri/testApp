import Vue from "vue";
import Users from "@/api/users";

const factories = {
  users: Users(Vue.axios),
};

Vue.$api = factories;