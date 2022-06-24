<template>
  <div class="">
    <SelectFile />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      filename: ''
    }
  },
  methods: {
    openURL (url) {
      window.open(url)
    }
  }
}
</script>
