export const state = () => ({
  files: [],
  open: {}
})

export const getter = {
  getFiles(state) {
    return state.counter
  }
}






export const mutations = {
  setFiles(state){
    state.files =[
      'test',
      'test2'
    ];
  }

}

export const actions = {
  async loadFiles({commit, state}) {

    const files =[
      'test',
      'test2'
    ];

    // make request
    commit('setFiles', files)
    return res.data;
  }
}