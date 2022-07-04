export default {
  methods: {
    toContent() {
      const arrow = document.getElementById('arrow-down')
      console.log('toContent called')
      console.log(arrow)
      arrow.scrollIntoView({
        behavior: 'smooth',
      })
    },
  }
}
