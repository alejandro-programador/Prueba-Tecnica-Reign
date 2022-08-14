// initial state
const initialState = {
    contentType: 'all'
}

// type
const CHANGE_CONTENT_TYPE = 'CHANGE_CONTENT_TYPE';

// reducers
const menuReducer = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE_CONTENT_TYPE': return{
            ...state,
            contentType: action.payload
        }
        default: return state;
    }
}

// actions
export const changeOptAction = (option) => async (dispatch, getState) => {
        dispatch({
            type: CHANGE_CONTENT_TYPE,
            payload: option
        })
}


// export
export default menuReducer