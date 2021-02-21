import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchImagesStart = () => {
    return {
        type: actionTypes.FETCH_IMAGES_START,
    };
};

export const fetchImagesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_IMAGES_SUCCESS,
        data: data,
    };
};


export const fetchImagesFail = (error) => {
    return {
        type: actionTypes.FETCH_IMAGES_FAIL,
        error: error,
    };
};

export const initFetchImages = (page) => {
    return dispatch => {
        dispatch(fetchImagesStart());
        let url = 'http://localhost:3232/api/getImages?page=' + page;
        axios.get(url)
        .then(res => {
            dispatch(fetchImagesSuccess(res.data.paginatedData));
        } )
        .catch(e => {
            dispatch(fetchImagesFail(e));
        } )
    };
};

export const changePage = () => {
    return {
        type: actionTypes.CHANGE_PAGE,
    }
}
