<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from './partials/nav';
import Footer from './partials/footer';

export default {
  components: {
    Nav, Footer
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  padding: 0.85rem 1.85rem;
  margin: 1rem 0;
  border: 1px solid #3b8070;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #3b8070;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  padding: 0.85rem 1.85rem;
  margin: 1rem 0;
  border: 1px solid #35495e;
  border-radius: 0.25rem;
  color: #35495e;
  text-decoration: none;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/*
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 50rem;
  margin: 0 auto;
} */
</style>
