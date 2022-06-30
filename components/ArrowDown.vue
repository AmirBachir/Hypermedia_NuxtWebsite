<template>
  <div style="text-align: center">
    <svg
      id="arrow-down"
      width="79"
      height="34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 3L39.5 30L77 3" stroke="#D8EFF5" stroke-width="5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "ArrowDown"
}
</script>

<style scoped>
#arrow-down {
  display: block;
  margin: 50px auto 50px;
}

#arrow-down:hover {
  cursor: pointer;
  filter: drop-shadow( 5px 5px 5px rgba(0, 0, 0, .7));
}
</style>
