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
        auth: "auth",
        loadPosts: "loadPosts",
        getPost: "getPost",
        postContactMessage: "postContactMessage",
        postSurveyResponse: "postSurveyResponse",
        getSurveyData: "getSurveyData"
    },
    mutations: {
        setUser: "setUser",
        deleteUser: "deleteUser",
        setPosts: "setPosts"
    },
    getters: {
        isLoggedIn: "isLoggedIn",
        getPost: "getPost"
    }
};
const state = {
        url: {
            signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
            signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
            firebase: "https://fizu-3e4ff-default-rtdb.firebaseio.com"
        },
        user: {...emptyUserObject, idToken: localStorage.getItem('idToken')},
        posts: JSON.parse(localStorage.getItem('posts')) || [],
    }
;

const actions = {
    [TYPES.actions.getSurveyData]({state}) {
        return axios.get(`${state.url.firebase}/surveyResponses.json?auth=${state.user.idToken}`)
            .then(result => {return result.data})
            .catch(error => {
                console.warn("store getSurvey: ", error);
                return Promise.reject(" post para ");
            })
    },
    [TYPES.actions.postSurveyResponse]({state}, surveyPayload) {
        return axios.post(`${state.url.firebase}/surveyResponses.json?auth=${state.user.idToken}`, surveyPayload).catch(
            error => {
                console.warn('store postSurvey error', error);
                return Promise.reject("Survey para");
            }
        );
    },
    [TYPES.actions.postContactMessage]({state}, contactPayload) {
        return axios.post(`${state.url.firebase}/contactMessages.json?auth=${state.user.idToken}`, contactPayload).catch(error => {
            console.warn('store postContactMessage', error);
            return Promise.reject('contact msg para waa');
        });
    },

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

    [TYPES.actions.auth]({commit, state}, {email, password, isSignUp}) {
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
    },
    [TYPES.actions.loadPosts]({commit, state}) {
        return axios.get(`${state.url.firebase}/blogposts.json?auth=${state.user.idToken}`)
            .then(r => r.data).then(r => {
                commit(TYPES.mutations.setPosts, r)
                return r;
            });
    }
};
const mutations = {
    [TYPES.mutations.setUser](state, userPayload) {
        state.user = {...userPayload};
        localStorage.setItem('idToken', state.user.idToken);
    },
    [TYPES.mutations.deleteUser](state) {
        state.user = {...emptyUserObject};
        localStorage.removeItem('idToken');
    },
    [TYPES.mutations.setPosts](state, fbPost) {
        state.posts = Object.values(fbPost);
        localStorage.setItem("posts", JSON.stringify(state.posts));

    }

};
const getters = {
    [TYPES.getters.isLoggedIn]: state => (state.user.idToken),
    [TYPES.getters.getPost]: state => postId => {
        return state.post = state.posts.find(p => p.id === postId);
    },
};
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
});
