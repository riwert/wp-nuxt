<template>
  <section>
    <header class="major">
      <h2>{{ page.section_3_header }}</h2>
    </header>
    <div class="posts">
      <article v-for="post in posts" :key="post.id">
        <a :href="post.link.url" class="image"><img :src="post.image.url" :alt="post.image.alt" /></a>
        <h3>{{ post.title }}</h3>
        <div class="post-body" v-html="post.body"></div>
        <ul class="actions">
          <li><a :href="post.link.url" class="button">{{ post.link.text }}</a></li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    rawPage: Object,
    rawPosts: Array,
  },
  computed: {
    page() {
      return {
        section_3_header: this.rawPage.acf.section_3_header,
      }
    },
    posts() {
      return this.rawPosts.map((post) => {
        return {
          title: post.title.rendered,
          body: post.excerpt.rendered,
          image: {
            url: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].source_url : null,
            alt: (post._embedded['wp:featuredmedia']) ? post._embedded['wp:featuredmedia'][0].title.rendered : null,
          },
          link: {
            url: `/blog/${post.slug}`,
            text: this.rawPage.acf.more_link_text
          }
        }
      })
    }
  },
}
</script>

<style>

</style>
