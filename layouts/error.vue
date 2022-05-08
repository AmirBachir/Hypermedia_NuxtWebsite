<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">404 - Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p>
      <a href="/">Homepage</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default() {
        return {statusCode: 0}
      }
    },
  }, // you can set a custom layout for the error page
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 70px;
  margin-top: 70px;
}
p {
  text-align: center;
}
a {
  margin: auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  background: #234c60;
  color: #d8eff5;
  border-color: #d8eff5;
  text-decoration: none;
}
a:hover {
  background: #103749;
}
</style>
