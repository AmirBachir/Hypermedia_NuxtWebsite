<template>
  <div class="container" @click="toggle(this)">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>
<script>
export default {
    name: "MenuIcon",
    methods:{
    toggle(x) {
        x.classList.toggle("change");
}
    }
}
</script>

<style scoped></style>
