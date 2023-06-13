import * as types from "./actionTypes"

export function getPostSuccess(post){
    return{
        type: types.GET_POSTS_SUCCESS,
        payload:post
    };
}
export function getPosts(){
    return function(dispatch){
        let url="http://localhost:3000/posts";
        return fetch(url).then(response=>response.json()).then(result=>dispatch(getPostSuccess(result)));
    }
}
export function getPostsWithCategory(categoryId){
    return function(dispatch){
        let url="http://localhost:3000/posts";
        if(categoryId){
            url+="?category_id="+categoryId;
        }
        return fetch(url).then(response=>response.json()).then(result=>dispatch(getPostSuccess(result)));
    }
}