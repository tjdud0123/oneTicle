<template>
  <div
    id="tabBar"
    class="c-pointer d-flex justify-content-between p-fixed bottom w-100 pt-1 pb-4 px-1"
  >
    <img
      :src="homeSrc"
      alt="icon"
      class="tab-bar-icon pb-2"
      @click="selectTab('HOME')"
    />
    <img
      :src="historySrc"
      alt="icon"
      class="tab-bar-icon pb-2"
      @click="selectTab('HISTORY')"
    />
    <img
      :src="mySrc"
      alt="icon"
      class="tab-bar-icon pb-2"
      @click="selectTab('MY')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    selectTab(tab) {
      this.$router.push({ name: tab });
    },
  },
  computed: {
    isHomeActive() {
      return this.$route.name === 'HOME' ? '_active' : '';
    },
    isHistoryActive() {
      return this.$route.name === 'HISTORY' ? '_active' : '';
    },
    isMyActive() {
      return this.$route.name === 'MY' ? '_active' : '';
    },
    homeSrc() {
      return require(`../assets/icon/home${this.isHomeActive}.png`);
    },
    historySrc() {
      return require(`../assets/icon/history${this.isHistoryActive}.png`);
    },
    mySrc() {
      return require(`../assets/icon/my${this.isMyActive}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
#tabBar {
  max-width: 450px;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.16);
}
.tab-bar-icon {
  width: 31%;
}
</style>
