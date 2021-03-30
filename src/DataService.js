import axios from "axios";
export const BACKEND_URL=" http://localhost:3000";

export default {
    GetPosts(){
        return axios.get(BACKEND_URL + "/blogposts").then((result) => {
            return result.data;
        });
    },
    GetPost(postID){
        return axios.get(BACKEND_URL + "/blogposts/" + postID).then((result) => {
            return result.data;
        });
    }
};