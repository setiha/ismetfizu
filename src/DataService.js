import axios from "axios";

export const BACKEND_URL = " http://localhost:3000";
export const FIREBASE_URL = "https://fizu-3e4ff-default-rtdb.firebaseio.com/";

export default {
    GetPosts() {
        return axios.get(BACKEND_URL + "/blogposts").then((result) => {
            return result.data;
        });
    },
    GetPost(postID) {
        return axios.get(BACKEND_URL + "/blogposts/" + postID).then((result) => {
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
        return axios.get(FIREBASE_URL + "/surveyResponses").then((result) => {
            return result.data;
        });
    },
};