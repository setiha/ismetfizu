import axios from "axios";

export const BACKEND_URL = "http://localhost:3000";
export const FIREBASE_URL = "https://fizu-3e4ff-default-rtdb.firebaseio.com";
const apiKey = "AIzaSyAOYJ-8h6Hs6Q7o5-S8iPUsyWo2MezWTcw";
const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
export default {
    GetPosts() {
        return axios.get(`${FIREBASE_URL}/blogposts.json`).then(result => {

            return result.data;
        });
    },
    GetPost(postID) {
        return axios.get(`${FIREBASE_URL}/blogposts/${postID}.json`).then((result) => {
            return result.data;
        });
    },
    PostContactMessage(data) {
        return axios.post(FIREBASE_URL + '/contactMessages.json', data)
            .then(() => {
                return true
            })
            .catch(error => {
                console.warn(error);
                return false;
            });
    },
    PostSurveyResponses(data) {
        return axios.post(FIREBASE_URL + '/surveyResponses.json', data)
            .then(() => {
                return true
            })
            .catch(error => {
                console.warn(error);
                return false;
            });
    },
    GetSurveyResponses() {
        return axios.get(FIREBASE_URL + "/surveyResponses.json").then((result) => {
            return result.data;
        });
    },
    SignIn({email, password}) {
        return axios.post(signInUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        }).then(r => r.data).then(r => {
            console.log("loginapi:", r);
            return r;
        }).catch(console.warn);
    },
    SignUp({email, password}) {
        return axios.post(signUpUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        }).then(r => r.data).then(r => {
            console.log("signUp:", r);
            return r;
        }).catch(err => {
            console.warn(err);
            return Promise.reject(err.response.data.error.message);
        });
    }
};