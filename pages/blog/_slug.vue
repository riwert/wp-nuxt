<template>
  <section id="post">
    <div class="container">
      <h1>{{ post.title }}</h1>
      <span v-if="post.image" class="image object">
        <img :src="post.image.url" :alt="post.image.alt" />
      </span>
      <div class="content" v-html="post.content"></div>
      <div class="controls">
        <nuxt-link v-bind:to="'/blog'" class="button">Back</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.post.title}`
    }
  },
  async asyncData({ params, $axios }) {
    const posts = await $axios.$get(`${process.env.apiUrl}/posts?slug=${params.slug}&_embed`);
    return {
      post: {
        title: posts[0].title.rendered,
        content: posts[0].content.rendered,
        image: {
          url: (posts[0]._embedded['wp:featuredmedia']) ? posts[0]._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (posts[0]._embedded['wp:featuredmedia']) ? posts[0]._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
      }
    }
  }
}
</script>

<style scoped>
.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
}
</style>
