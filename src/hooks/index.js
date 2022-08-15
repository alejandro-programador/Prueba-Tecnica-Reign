/** Imports */
import React, { useRef } from 'react';
import {List} from './list';
import {useInfinityScrollCharacters} from './useInfinityScrollCharacters';
import { useDispatch, useSelector } from 'react-redux';

/**
  * It get all datas and send to List component.
  * @function
  * @name Characters
  * @param {Object} props 
 */
export const Characters = (props) => {
    const elementToObserveRef = useRef();
    const charactersDataRef = useRef([]);

    const [state] = useInfinityScrollCharacters(
        elementToObserveRef,
        charactersDataRef,
        props.category
    );

    const {
        statusData,
        error
    } = state;

  return (
    <List
        status={statusData}
        charactersData={charactersDataRef.current}
        error={error}
        elementToObserveRef={elementToObserveRef}
    />
  )
}