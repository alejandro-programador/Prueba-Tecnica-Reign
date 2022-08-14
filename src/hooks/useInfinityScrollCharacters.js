import { useEffect, useState } from "react";
import { useScreen } from './useScreen';
import { useDataProvider, LOADING } from './useDataProvider';

const mergeData = (currentData, newData) => {
    if(newData){
        const elementsToAdd = newData.filter( newItem => {
            //currentData.map(item => item.objectID === newItem.objectID )
            return !currentData.some(item => item.objectID === newItem.objectID);
        } );
        return [
            ...currentData,
            ...elementsToAdd,
        ]
    }
    return currentData;
}

export const useInfinityScrollCharacters = (
    elementToObserveRef,
    characterRef
) => {
    
    const [isShowing] = useScreen(elementToObserveRef, '0px');
    const [state, loading] = useDataProvider(`https://hn.algolia.com/api/v1/search_by_date`);
    const {
        statusData,
        data
    } = state;
    const [page, setPage] = useState(1);
    const {hits} = data ? data : {};
    characterRef.current = mergeData(characterRef.current, hits);
    useEffect( () => {
        if(isShowing && statusData !== LOADING){
            setPage(page+1);
            loading(`https://hn.algolia.com/api/v1/search_by_date?page=${page}`);
        }
    }, [isShowing] );
    return [state];
}