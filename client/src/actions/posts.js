//here we import everything from the actions as api
import * as api from '../api';

//Action Creators
//since it will take a while for it to get the data we have to use async
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); 

        dispatch ({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
        
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}