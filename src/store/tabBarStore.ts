import { defineStore } from "pinia";

const tabBarStore = defineStore('tabBarStore', {
  state: () => ({
    activeIndex: 0,
  }),
  getters:{},
  actions:{}
})

export default tabBarStore