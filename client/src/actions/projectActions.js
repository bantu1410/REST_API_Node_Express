import axios from 'axios';
import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT, PROJECTS_LOADING } from "./types";

export const getProjects = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/projects').then(res =>
        dispatch({
            type: GET_PROJECTS,
            payload: res.data
        })
    );
};


export const deleteProject = (id) => {
    return {
        type: DELETE_PROJECT,
        payload: id
    };
}

export const setItemsLoading = () => {
    return {
        type: PROJECTS_LOADING
    }
}