import axios from 'axios';

const state = {
  clouds: null,
  uniqueCloudTypes: null,
  successMessage: null,
  errorMessage: null
};
const getters = {
  allClouds: state => state.clouds,
  getUniqueCloudTypes: state => state.uniqueCloudTypes,
  getSuccessMessage: state => state.successMessage,
  getErrorMessage: state => state.errorMessage
};

const actions = {
  async getClouds({ commit }) {
    const response = await axios.get(
      'http://vapor-trails.hirelofty.com/clouds/'
    );
    commit('setClouds', response.data);
    commit('setUniqueCloudTypes', state.clouds);
  },
  async addCloud({ commit }, cloud) {
    /*eslint-disable no-unused-vars*/
    const ERROR_MESSAGE =
      'Error creating cloud: Make sure Cloud Type is selected, cloud name is less then 50 characters, and size is a number.';
    commit('setSuccessMessage', null);
    commit('setErrorMessage', null);

    if (cloud.cloud_type !== null) {
      await axios
        .post(`http://vapor-trails.hirelofty.com/clouds/`, {
          cloud_type: cloud.cloudTypeInput,
          size: cloud.cloudSizeInput,
          name: cloud.cloudNameInput
        })
        .then(response => {
          commit('newCloud', response.data);
          commit('setSuccessMessage', 'Cloud added successfully');
        })
        .catch(error => {
          commit('setErrorMessage', ERROR_MESSAGE);
        });
    } else {
      commit('setErrorMessage', ERROR_MESSAGE);
    }
  }
};
const mutations = {
  setClouds: (state, clouds) => (state.clouds = clouds),
  setUniqueCloudTypes: (state, clouds) =>
    (state.uniqueCloudTypes = [
      ...new Set(clouds.map(cloud => cloud.cloud_type))
    ]),
  newCloud: (state, cloud) => state.clouds.push(cloud),
  setSuccessMessage: (state, message) => (state.successMessage = message),
  setErrorMessage: (state, message) => (state.errorMessage = message)
};

export default {
  state,
  getters,
  actions,
  mutations
};
