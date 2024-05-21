import { defineStore } from "pinia";

export const globalStore = defineStore("global", {
  state: () => ({
    isLoading: false,
  }),
  getters: {
    getLoading: (state) => state.isLoading,
  },
  actions: {
    setLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
  },
});
