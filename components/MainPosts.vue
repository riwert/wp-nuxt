<template>
  <section>
    <header class="major">
      <h2>{{ page.section_3_header }}</h2>
    </header>
    <div v-if="posts" class="posts">
      <Post v-for="post in posts" :key="post.id" :raw-post="post" :more-link-text="page.more_link_text" />
    </div>
  </section>
</template>

<script>
import Post from '~/components/Post';

export default {
  components: {
    Post
  },
  props: {
    rawPage: Object,
    rawPosts: Array,
  },
  computed: {
    page() {
      return {
        section_3_header: this.rawPage.acf.section_3_header,
        more_link_text: this.rawPage.acf.more_link_text
      }
    },
    posts() {
      return this.rawPosts;
    }
  },
}
</script>

<style>

</style>
