<template>
  <li>
    <nuxt-link :class="[hasChildren ? 'opener' : '', (isActive || isChildActive) ? 'active' : '']" :to="`/${page.slug}`">
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
import { mapGetters } from 'vuex';

export default {
  props: {
    page: Object
  },
  computed: {
    ...mapGetters(['getCurrentPage']),
    currentPage() {
      return this.getCurrentPage;
    },
    hasChildren() {
      return this.page.children && this.page.children.length;
    },
    isActive() {
      return this.currentPage && this.currentPage.id == this.page.id;
    },
    isChildActive() {
      return this.currentPage && this.currentPage.parent == this.page.id;
    }
  },
}
</script>

<style>

</style>
