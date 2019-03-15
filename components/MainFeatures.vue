<template>
  <section>
    <header class="major">
      <h2>{{ page.section_2_header }}</h2>
    </header>
    <div class="features">
      <article v-for="item in page.section_2_items" :key="item.id">
        <span :class="'icon ' + item.icon"></span>
        <div class="content">
          <h3>{{ item.header }}</h3>
          <p>{{ item.body }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    rawPage: Object
  },
  computed: {
    page() {
      return {
        section_2_header: this.rawPage.acf.section_2_header,
        section_2_items: [
          {
            id: 1,
            header: this.rawPage.acf.item_header_1,
            body: this.rawPage.acf.item_body_1,
            icon: this.rawPage.acf.item_icon_1,
          },
          {
            id: 2,
            header: this.rawPage.acf.item_header_2,
            body: this.rawPage.acf.item_body_2,
            icon: this.rawPage.acf.item_icon_2,
          },
          {
            id: 3,
            header: this.rawPage.acf.item_header_3,
            body: this.rawPage.acf.item_body_3,
            icon: this.rawPage.acf.item_icon_3,
          },
          {
            id: 4,
            header: this.rawPage.acf.item_header_4,
            body: this.rawPage.acf.item_body_4,
            icon: this.rawPage.acf.item_icon_4,
          },
        ],
      }
    }
  },
}
</script>

<style>

</style>
