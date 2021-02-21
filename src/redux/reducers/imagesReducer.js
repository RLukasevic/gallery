import * as actionTypes from '../actions/actionTypes';

const initialState = {
    images: [],
    page: 0,
    loading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_IMAGES_START: return fetchImagesStart(state)
        case actionTypes.FETCH_IMAGES_SUCCESS: return fetchImagesSuccess(state, action)
        case actionTypes.FETCH_IMAGES_FAIL: return fetchImagesFail(state, action)
        case actionTypes.CHANGE_PAGE: return changePage(state);

        default: return state;
    }
}

const fetchImagesStart = (state) => {
    return {
        ...state,
        loading: !state.loading,
        error: false,
    };
}

const fetchImagesSuccess = (state, action) => {

    const newState = [...state.images]
    for (let item of action.data) {
        newState.push(item)
    }

    return {
        ...state,
        images: newState,
        loading: !state.loading,
    };
}

const fetchImagesFail = (state, action) => {
    return {
        ...state,
        loading: !state.loading,
        error: action.error,
    };
}

const changePage = (state) => {
    return {
        ...state,
        page: state.page+1
    }
}

export default reducer;