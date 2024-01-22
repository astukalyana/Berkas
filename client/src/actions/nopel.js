import * as api from '../api/index.js';

export const getNopels = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNopel();

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createNopel = (post) => async (dispatch) => {
    try {
        const { data } = await api.createNopel(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNopel = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateNopel(id, post)

        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNopel = (id) => async (dispatch) => {
    try {
        await api.deleteNopel(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message);
    }
}