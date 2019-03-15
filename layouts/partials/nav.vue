<template>
  <nav id="menu">
    <header class="major">
      <h2>Menu</h2>
    </header>
    <ul>
      <li><nuxt-link to="/">Strona główna</nuxt-link></li>
      <NavItem v-for="page in treePages" :key="page.id" :page="page" />
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
import NavItem from './nav-item';

export default {
  components: {
    NavItem
  },
  computed: {
    pages() {
      return this.$store.state.pages.filter((page) => page.slug != 'strona-glowna');
    },
    computedPages() {
      let rootPages = [];
      let subPages = [];
      for (let i = 0, len = this.pages.length; i < len; i++) {
        if (this.pages[i].parent == 0) {
          rootPages.push(this.pages[i]);
        } else {
          subPages.push(this.pages[i]);
        }
      }
      return {
        root: rootPages,
        sub: subPages
      }
    },
    treePages() {
      return this.buildTreePages();
    }
  },
  methods: {
    buildTreePages(parent = 0) {
      let tree = [];
      this.pages.forEach((page) => {
        if (page.parent == parent) {
          let children = this.buildTreePages(page.id);
          if (children.length) {
            page.children = children;
          }
          tree.push(page);
        }
      });
      return tree;
    }
  },
}
</script>

<style>

</style>
