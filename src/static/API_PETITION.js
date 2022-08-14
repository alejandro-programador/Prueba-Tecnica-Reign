import axios from 'axios';

export const API_DATA = async (category=null) => {

    let URL;

    URL = (category === 'angular' || category === 'react' || category === 'vue') ? 
    `https://hn.algolia.com/api/v1/search_by_date?query=${category}` 
    : 
    'https://hn.algolia.com/api/v1/search_by_date';

    const RESPONSE  = await axios.get(URL);
    return RESPONSE;
}