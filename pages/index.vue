<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-link to="/about">About page</nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World from DATA!'
    }
  },
  head () {
    return {
      title: this.title+ "from head",
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>