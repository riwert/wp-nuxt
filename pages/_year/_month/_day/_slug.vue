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
  async asyncData({ params, $axios }) {
    const post = await $axios.$get(`${process.env.apiUrl}/posts?slug=${params.slug}`);
    return {
      slug: post[0].slug,
      title: post[0].title.rendered,
      content: post[0].content.rendered
    }
  },
}
</script>

<style>

</style>
