<template>
  <section :id="slug">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="content" v-html="content"></div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title}`
    }
  },
  async asyncData({ params, $axios }) {
    const page = await $axios.$get(`${process.env.apiUrl}/pages?slug=${params.pathMatch}`);
    return {
      slug: page[0].slug,
      title: page[0].title.rendered,
      content: page[0].content.rendered
    }
  },
}
</script>

<style>

</style>
