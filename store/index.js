import axios from 'axios'

export const state = () => ({
	pages: null
})

export const mutations = {
	SET_PAGES(state, pages) {
		state.pages = pages
	}
}

export const actions = {
	// async init ({ commit }) {

  // },
  async nuxtServerInit ({ commit }, { req }) {
    // console.log('server init')
    let { data } = await axios.get(`${process.env.apiUrl}/pages?&orderby=menu_order&order=asc`)
    // let { data } = await axios.get(`${process.env.apiUrl}/menus/menu-1`)
    commit('SET_PAGES', data)
  }
}
