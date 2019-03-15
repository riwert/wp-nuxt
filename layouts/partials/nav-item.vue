<template>
  <li>
    <nuxt-link :class="[hasChildren ? 'opener' : '', isChildActive ? 'active' : '']" :to="`/${page.slug}`">
      {{ page.title.rendered }}
    </nuxt-link>
    <ul v-if="hasChildren">
      <li v-for="subpage in page.children" :key="subpage.id">
        <nuxt-link :to="`/${subpage.slug}`">
          {{ subpage.title.rendered }}
        </nuxt-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    page: Object
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    },
    hasChildren() {
      return this.page.children && this.page.children.length;
    },
    isChildActive() {
      return this.currentPage && this.currentPage.parent == this.page.id;
    }
  },
}
</script>

<style>

</style>
