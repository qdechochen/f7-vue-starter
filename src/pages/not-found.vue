<template>
  <f7-page>
    <f7-navbar title="Not found" back-link="Back"></f7-navbar>
    <f7-block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
      <div>:{{JSON.stringify($f7route)}}</div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {};
</script>
