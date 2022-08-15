// Managment API

import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const dataReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case LOADING: return {
            ...state,
            statusData: LOADING,
            url: payload.url
        }
        case SUCCESS: return {
            ...state,
            statusData: SUCCESS,
            data: payload.data
        }
        case ERROR: return {
            ...state,
            statusData: ERROR,
            data: payload.error
        }
    }
}

export const useDataProvider = initialUrl => {
    const initialState = {
        url: initialUrl,
        statusData: LOADING,
    };

    const [state, dispatch] = useReducer(dataReducer, initialState);
    const {
        url,
        statusData
    } = state;

    const category = useSelector( state => state.Filter.category );

    useEffect(() => {
        if(statusData === LOADING && url){
            console.log('ejecutando esto');
            fetch(url)
            .then(resp => resp.json())
            .then(data => dispatch({
                type: SUCCESS,
                payload: {
                    data: data,
                }
            }))
            .catch(error => dispatch({
                type: ERROR,
                payload: {
                    error: error,
                }
            }))
        }
    }, [url, category]);

    const loading = url => {
        dispatch({
            type: LOADING,
            payload: {
                url: url
            }
        })
        console.log('ejecutando loading');
    }

    return [state, loading];

}
