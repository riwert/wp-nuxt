<template>
  <section id="about">
    <div class="container">
      <h1>Services</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima corrupti animi sequi eius voluptatem eos ab et molestiae iste architecto nostrum necessitatibus, consectetur repudiandae reiciendis nobis accusantium dolor. Reprehenderit?</p>
      <nuxt-link v-bind:to="'/'" class="button--grey">Back</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'pulse',
  head() {
    return {
      title: 'Services Nuxt App',
      meta: [
        { hid: 'description', name: 'description', content: 'This is my services description here.'},
        { hid: 'keywords', name: 'keywords', content: 'services, nuxt, app'},
      ]
    }
  }
}
</script>

<style>

</style>
