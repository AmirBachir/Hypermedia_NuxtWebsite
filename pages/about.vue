<template>
  <custom-page :title="title" :image="image" :description="description" />
</template>

<script>
export default {
  name: 'AboutPage',
  components: {},
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
    }
  },
}
</script>
