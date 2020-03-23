import axois from "axios"

axois.defaults.baseURL = "http://127.0.0.1:8000"

export default{

    getAllPosts(){
        return axois.get('/account/')
    },

    createPosts(data){
        return axois.post('/account/register/', data)
    },

    loginPosts(data){
        return axois.post('/account/api-token-auth/', data)
    },
}