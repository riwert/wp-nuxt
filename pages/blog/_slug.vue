<template>
  <section id="post" :class="'post-' + post.slug">
    <div class="content">
        <header>
          <h1>{{ post.title }}</h1>
        </header>
        <span v-if="post.image" class="image object">
          <img :src="post.image.url" :alt="post.image.alt" />
        </span>
        <div class="post-content" v-html="post.content"></div>
        <div class="controls">
          <nuxt-link v-bind:to="back_link.url" class="button">{{ back_link.text }}</nuxt-link>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.excerpt},
      ]
    }
  },
  async asyncData({ params, store, error }) {
    const post = store.getters.getPostBySlug(params.slug);
    if ( ! post) {
      return error({ statusCode: 404, message: 'Post not found' });
    }
    store.dispatch('setCurrentPage', post);
    const blog = store.state.config.blog.acf;
    return {
      post: {
        slug: post.slug,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        content: post.content.rendered,
        image: {
          url: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : null,
          alt: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].title.rendered : null,
        },
      },
      back_link: {
        url: blog.back_link.url,
        text: blog.back_link.title,
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
