<template>
  <section>
    <header class="major">
      <h2>{{ sidePosts.header }}</h2>
    </header>
    <div class="mini-posts">
      <article v-for="post in computedPosts" :key="post.id">
        <a v-if="post.image" :href="post.link" :title="post.title" class="image"><img :src="post.image.url" :alt="post.image.alt" /></a>
        <!-- <h3>{{ post.title }}</h3> -->
        <div class="excerpt" v-html="post.excerpt"></div>
      </article>
    </div>
    <ul class="actions">
      <li><nuxt-link :to="blog.back_link.url" class="button">{{ blog.more_link_text }}</nuxt-link></li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    sidePosts() {
      return this.$store.state.config.side_posts.acf;
    },
    blog() {
      return this.$store.state.config.blog.acf;
    },
    posts() {
      return this.$store.state.posts;
    },
    computedPosts() {
      return this.posts.map((post) => {
        return {
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          image: {
            url: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : null,
            alt: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].title.rendered : null,
          },
          link: `/blog/${post.slug}`,
        }
      });
    }
  }
}
</script>

<style>

</style>
