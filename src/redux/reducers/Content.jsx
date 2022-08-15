// initial state
const initialState = {
    content: []
}

// type
const CLEAN_CONTENT = 'CLEAN_CONTENT',
      ADD_CONTENT = 'ADD_CONTENT';

// reducers
const contentReducer = (state=initialState, action) => {
    switch(action.type){
        case 'CLEAN_CONTENT': return{
            content: action.payload
        }
        case 'ADD_CONTENT': return{
            content: action.payload
        }
        default: return state;
    }
}

// actions
export const cleanContentAction = () => async (dispatch, getState) => {
    dispatch({
        type: CLEAN_CONTENT,
        payload: []
    });
}

export const addContentAction = (content) => async (dispatch, getState) => {
    dispatch({
        type: ADD_CONTENT,
        payload: content
    });
}


// export
export default contentReducer