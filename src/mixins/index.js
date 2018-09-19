const globalMixins = {
  computed: {
    $user() {
      return this.$store.state.user;
    },
    $isLogin() {
      return !!this.$user.id;
    },
  },
};

export default globalMixins;
