<template>
  <div class="page-home"></div>
</template>

<script>
export default {
  data () {
    return {
      imgPath: process.env.IMG_ROOT
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getShare()
    }
  }
}
</script>
