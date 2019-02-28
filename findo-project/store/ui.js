export const state = () => ({
    menu: false,
})

export const mutations = {
  toggleMenu(state) { state.menu = !state.menu },
  openMenu(state) { state.menu = true },
  closeMenu(state) { state.menu = false },
}