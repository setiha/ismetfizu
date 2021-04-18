import axios from "axios";

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