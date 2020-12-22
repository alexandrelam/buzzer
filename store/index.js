export const state = () => ({
    name: "alex"
})

export const mutations = {
    setName(state, name) {
        state.name = name
    }
}