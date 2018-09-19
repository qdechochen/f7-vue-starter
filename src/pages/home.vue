<template>
  <f7-page name="home">
    <f7-navbar :title="$t('app_name')"></f7-navbar>
    <f7-block strong>
      HOME
      <f7-link href="/about/">About</f7-link>
    </f7-block>
    <f7-list>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input-x type="text" v-model="textVal"></f7-input-x>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
// import F7InputX from '@/components/share/f7-input-x.js';

export default {
  components: {
    // F7InputX,
  },
  data() {
    return {
      textVal: 'abc',
    };
  },
};
</script>
