<template>
  <section>
    <header class="major">
      <h2>{{ contact.header }}</h2>
    </header>
    <div class="contact-content" v-html="contact.content"></div>
    <ul class="contact">
      <li v-if="contact.email" class="fa-envelope-o"><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
      <li v-if="contact.phone" class="fa-phone">{{ contact.phone }}</li>
      <li v-if="contact.address" class="fa-home" v-html="contact.address"></li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getConfig', 'getAllPages']),
    contact() {
      return this.getConfig('contact');
    }
  }
}
</script>

<style>

</style>
