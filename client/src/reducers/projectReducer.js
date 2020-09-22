import { v1 as uuid } from 'uuid';
import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT } from '../actions/types';

const initialState = {
    projects: [
        { id: uuid(), name: 'P1' },
        { id: uuid(), name: 'P2' },
        { id: uuid(), name: 'P5' },
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload)
            }
        default:
            return state;
    }
}