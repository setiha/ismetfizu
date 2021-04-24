import axios from "axios";

export default {
    /*GetPost(postID) {
        return axios.get(`${FIREBASE_URL}/blogposts/${postID}.json`).then((result) => {
            return result.data;
        });
    },*/
    GetSurveyResponses() {
        return axios.get(FIREBASE_URL + "/surveyResponses.json").then((result) => {
            return result.data;
        });
    }

    /*SignUp({email, password}) {
        return axios.post(signUpUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        }).then(r => r.data).then(r => {
            return r;
        }).catch(err => {
            console.warn(err);
            return Promise.reject(err.response.data.error.message);
        });
    }*/
};