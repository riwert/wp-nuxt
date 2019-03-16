import axios from 'axios'

export const strict = false

export const state = () => ({
  config: null,
  pages: null,
  posts: null,
  currentPage: null,
})

export const mutations = {
  SET_CONFIG(state, config) {
    const configObj = {};
    config.forEach((conf) => {
      configObj[conf.slug] = conf;
    });
		state.config = configObj
  },
	SET_PAGES(state, pages) {
		state.pages = pages
  },
  SET_POSTS(state, posts) {
		state.posts = posts
  },
  SET_CURRENT_PAGE(state, currentPage) {
		state.currentPage = currentPage
  },
}

export const actions = {
	// async init ({ commit }) {

  // },
  async nuxtServerInit ({ commit }, { req }) {
    // console.log('server init')
    let siteConfig = await axios.get(`${process.env.apiUrl}/config`)
    commit('SET_CONFIG', siteConfig.data)

    let menuPages = await axios.get(`${process.env.apiUrl}/pages?_embed&orderby=menu_order&order=asc`)
    commit('SET_PAGES', menuPages.data.map((page) => {
      if (page.slug == 'strona-glowna') {
        page.slug = '';
      }
      return page;
    }))

    let sidePosts = await axios.get(`${process.env.apiUrl}/posts?_embed&categories=4&per_page=3`)
    commit('SET_POSTS', sidePosts.data)
  },
  setCurrentPage({ commit }, currentPage) {
    commit('SET_CURRENT_PAGE', currentPage);
  }
}

export const getters = {
  getPageBySlug: (state) => (slug) => {
    let pages = state.pages.filter((page) => page.slug === slug);
    return (pages[0]) ? pages[0] : null;
  }
}
