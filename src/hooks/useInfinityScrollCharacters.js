/** Imports */
import { useEffect, useState } from "react";
import { useScreen } from './useScreen';
import { useDataProvider, LOADING } from './useDataProvider';
import { useDispatch, useSelector } from 'react-redux';
import { addContentAction, cleanContentAction } from '../redux/reducers/Content';

/**
  * Merge the data.
  * @function
  * @name mergeData
  * @param {Array} currentData 
  * @param {Array} newData 
 */
const mergeData = (currentData, newData) => {

    if(newData){
        const elementsToAdd = newData.filter( newItem => {
            return !currentData.some(item => item.objectID === newItem.objectID);
        } );
        return [
            ...currentData,
            ...elementsToAdd,
        ]
    }
    return currentData;
}

/**
  * Create the infinite scroll.
  * @function
  * @name useInfinityScrollCharacters
  * @param {Object} elementToObserveRef 
  * @param {Array} characterRef 
 */
export const useInfinityScrollCharacters = (
    elementToObserveRef,
    characterRef
) => {
    
    const dispatch = useDispatch();
    const [isShowing] = useScreen(elementToObserveRef, '0px');
    const category = useSelector( state => state.Filter.category );
    const content = useSelector( state => state.Content.content );
    const [state, loading] = useDataProvider(`https://hn.algolia.com/api/v1/search_by_date?query=${category}`);

    const {
        statusData,
        data
    } = state;
    
    const [page, setPage] = useState(0);
    const {hits} = data ? data : {};

    if( content.length == 0 ){
        characterRef.current = mergeData(content, hits);
    }else{
        characterRef.current = mergeData(characterRef.current, hits);
    }


    useEffect( () => {
        dispatch(addContentAction(characterRef.current));
    }, [hits] );

    useEffect( () => {
        dispatch(cleanContentAction());
        setPage(0);
    }, [category] );

    useEffect( () => {
        if(isShowing && statusData !== LOADING){
            setPage(page+1);
            loading(`https://hn.algolia.com/api/v1/search_by_date?query=${category}&page=${page}`);
        }
    }, [isShowing] );

    return [state];
}