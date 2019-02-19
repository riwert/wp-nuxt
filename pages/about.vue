<template>
  <section id="about">
    <div class="container">
      <logo />
      <h1>About</h1>
      <p>This is an about page.</p>
      <nuxt-link v-bind:to="'/'" class="button">Back</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'About Nuxt App',
      meta: [
        { hid: 'description', name: 'description', content: 'This is my about description here.'},
        { hid: 'keywords', name: 'keywords', content: 'about, nuxt, app'},
      ]
    }
  }
}
</script>

<style>

</style>
