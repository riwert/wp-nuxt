<template>
  <section>
    <div class="container">
      <h1 class="title">
        Nuxt App
      </h1>
      <h2 class="subtitle">
        My grand Nuxt.js project
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos rerum. Voluptas molestiae voluptatibus in! Ex non rem perspiciatis repellendus optio quis illum porro officia id? Culpa impedit accusamus id?</p>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'pulse',
  head() {
    return {
      title: 'Nuxt App',
      meta: [
        { hid: 'description', name: 'description', content: 'This is my Nuxt App here.'},
        { hid: 'keywords', name: 'keywords', content: 'home, nuxt, app'},
      ]
    }
  }
}
</script>

<style>

</style>
