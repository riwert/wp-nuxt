<template>
  <article>
    <h2><nuxt-link :to="post.link">{{ post.title }}</nuxt-link></h2>
    <nuxt-link :to="post.link" v-if="post.image" class="image object">
      <img :src="post.image.url" :alt="post.image.alt" />
    </nuxt-link>
    <div v-html="post.excerpt"></div>
  </article>
</template>

<script>
export default {
  props: {
    rawPost: Object
  },
  computed: {
    post() {
      return {
        id: this.rawPost.id,
        title: this.rawPost.title.rendered,
        excerpt: this.rawPost.excerpt.rendered,
        link: `/blog/${this.rawPost.slug}`,
        image: {
          url: (this.rawPost._embedded['wp:featuredmedia']) ? this.rawPost._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (this.rawPost._embedded['wp:featuredmedia']) ? this.rawPost._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
      }
    }
  }
}
</script>

<style>

</style>
