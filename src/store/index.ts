import Vue from 'vue';
import Vuex from 'vuex';
import {TableColumn} from '@/store/assetPage';
import {Role} from '@/store/interfaces';
import * as api from '@/api';

Vue.use(Vuex);

// Mutations
const LOGIN = 'login';
const LOGIN_SUCCESS = 'loginSuccess';
const REPLACE_ROLES = 'replaceRoles';
const DELETE_ROLE = 'deleteRole';
const CREATE_ROLE = 'createRole';
const REPLACE_CURRENT_SUBMISSION = 'replaceCurrentSubmission';

interface State {
  isAuthenticated: boolean;
  allRoles: Role[];
}

export default new Vuex.Store({
  state: {
    isAuthenticated: true,
    allRoles: []
  } as State,

  mutations: {
    [REPLACE_ROLES](state, roles: Role[]) {
      state.allRoles = roles;
    }
  },

  actions: {
    getAllRoles({commit}, tableColumns: TableColumn[]) {
      return new Promise((resolve: () => void) => {
        api.get('allRoles', tableColumns)
          .then((roles: any) => commit(REPLACE_ROLES, roles.allRoles))
          .then(() => resolve());
      });
    }
  }
});
