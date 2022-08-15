// initial state
const initialState = {
    category: ''
}

// type
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

// reducers
const filterReducer = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE_CATEGORY': return{
            category: action.payload
        }
        default: return state;
    }
}

// actions
export const changeCategoryAction = (category) => async (dispatch, getState) => {
        dispatch({
            type: CHANGE_CATEGORY,
            payload: category
        });
}


// export
export default filterReducer