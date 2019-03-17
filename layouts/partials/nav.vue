<template>
  <nav id="menu">
    <header class="major">
      <h2>{{ menu.header }}</h2>
    </header>
    <ul class="nav">
      <NavItem v-for="page in treePages" :key="page.id" :page="page" />
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import NavItem from './nav-item';

export default {
  components: {
    NavItem
  },
  computed: {
    ...mapGetters(['getConfig', 'getAllPages']),
    menu() {
      return this.getConfig('menu');
    },
    pages() {
      return this.getAllPages;
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
