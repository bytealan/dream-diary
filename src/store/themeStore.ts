import { defineStore } from "pinia";

const tabBarStore = defineStore('themeStore', {
  state: () => ({
    theme: 'light',
  }),
  getters:{},
  actions:{}
})

export default tabBarStore