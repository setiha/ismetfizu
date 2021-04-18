import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const apiKey = "AIzaSyAOYJ-8h6Hs6Q7o5-S8iPUsyWo2MezWTcw";
const emptyUserObject = {
    kind: '',
    idToken: '',
    email: '',
    refreshToken: '',
    expiresIn: '',
    localId: '',
};
Vue.use(Vuex);


export const TYPES = {
    actions: {
        signIn: "signIn",
        signUp: "signUp",
        auth: "auth"
    },
    mutations: {
        setUser: "setUser",
        deleteUser: "deleteUser"
    }
}
const state = {
        url: {
            signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
            signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
            firebase: "https://fizu-3e4ff-default-rtdb.firebaseio.com"
        },
        user: emptyUserObject
    }
;

const actions = {
    [TYPES.actions.signIn]({dispatch}, credentialsPayload) {
        return dispatch(TYPES.actions.auth, {
                ...credentialsPayload,
                isSignUp: false
            }
        )
    },
    [TYPES.actions.signUp]
        ({dispatch}, credentialsPayload) {
        return dispatch(TYPES.actions.auth, {
            ...credentialsPayload,
            isSignUp: true
        });
    },

    [TYPES.actions.auth]({commit, state}, {email, password,isSignUp}) {
        return axios.post(isSignUp ? state.url.signUp : state.url.signIn, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .then(r => r.data)
            .then(r => {
                commit(TYPES.mutations.setUser, r)
                return r;
            })
            .catch(err => {
                console.warn(err);
                commit(TYPES.mutations.deleteUser);
                return Promise.reject(err.response.data.error.message);
            });
    }
};
const mutations = {
    [TYPES.mutations.setUser](state, userPayload) {
        state.user = {...userPayload};
    },
    [TYPES.mutations.deleteUser](state){
        state.user = {...emptyUserObject};
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations
});
