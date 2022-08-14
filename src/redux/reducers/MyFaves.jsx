// initial state
const initialState = {
    myFaves: []
}

// type
const CHANGE_MY_FAVES = 'CHANGE_MY_FAVES'

// reducers
const myFavesReducer = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE_MY_FAVES': return{
            myFaves: action.payload
        }
        default: return state;
    }
}

// actions
export const getFavoritesAction = () => async (dispatch, getState) => {

    let faves = JSON.parse(localStorage.getItem('my_faves'));

    // save in Redux
    dispatch({
        type: CHANGE_MY_FAVES,
        payload: faves
    })
    
}

export const addFavoriteAction = (element) => async (dispatch, getState) => {

    let faves = localStorage.getItem('my_faves'),
        newPost;

    newPost = ( faves ) ? [ ...JSON.parse(faves), element ] : [ element ];
    
    // save in Redux
    dispatch({
        type: CHANGE_MY_FAVES,
        payload: newPost
    })

    // save in LS
    localStorage.setItem('my_faves', JSON.stringify(newPost));
}

export const deleteFavoriteAction = (element) => async (dispatch, getState) => {

    let faves = getState().MyFaves.myFaves;

    const NEW_FAVES_LIST = faves.filter((item) => item.story_title !== element.story_title);

    dispatch({
        type: CHANGE_MY_FAVES,
        payload: NEW_FAVES_LIST
    })
    
    localStorage.setItem('my_faves',JSON.stringify(NEW_FAVES_LIST));
}


// export
export default myFavesReducer