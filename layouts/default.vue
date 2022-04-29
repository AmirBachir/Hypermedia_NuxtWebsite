<template>
  <div class="main-page">
    <the-header />
    <nuxt />
    <the-footer class="footer" />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style scoped>
* {
  background: #234C60;
  color: #D8EFF5;
}

.footer {
  margin-top: 150px;
}
</style>
