export const strict = false

export const state = () => ({
  config: null,
  pages: null,
  sidePosts: null,
  currentPage: null,
})

export const mutations = {
  SET_CONFIG(state, config) {
		state.config = config
  },
	SET_PAGES(state, pages) {
		state.pages = pages
  },
  SET_SIDE_POSTS(state, sidePosts) {
		state.sidePosts = sidePosts
  },
  SET_CURRENT_PAGE(state, currentPage) {
		state.currentPage = currentPage
  },
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    // console.log('nuxt server init')
    await dispatch('setConfig')
    await dispatch('setPages')
    await dispatch('setSidePosts')
  },
  async setConfig({ commit }) {
    const siteConfig = await this.$axios.$get(`${process.env.apiUrl}/config`)
    const configObj = {}
    siteConfig.forEach((conf) => {
      configObj[conf.slug] = conf
    })
    commit('SET_CONFIG', configObj)
  },
  async setPages({ commit }) {
    const mainSlug = 'strona-glowna'
    const menuPages = await this.$axios.$get(`${process.env.apiUrl}/pages?_embed&orderby=menu_order&order=asc`)
    commit('SET_PAGES', menuPages.map((page) => {
      if (page.slug == mainSlug) {
        page.slug = ''
      }
      return page;
    }))
  },
  async setSidePosts({ commit }) {
    const categoryId = 4
    const postsLimit = 3
    const sidePosts = await this.$axios.$get(`${process.env.apiUrl}/posts?_embed&categories=${categoryId}&per_page=${postsLimit}`)
    commit('SET_SIDE_POSTS', sidePosts)
  },
  setCurrentPage({ commit }, currentPage) {
    commit('SET_CURRENT_PAGE', currentPage)
  }
}

export const getters = {
  getAllPages: state => {
    return state.pages
  },
  getPageBySlug: state => slug => {
    const pages = state.pages.filter((page) => page.slug === slug)
    return (pages[0]) ? pages[0] : null
  },
  getCurrentPage: state => {
    return state.currentPage
  },
  getSidePosts: state => {
    return state.sidePosts
  },
  getConfig: state => name => {
    return (state.config[name]) ? state.config[name].acf : null
  },
}
