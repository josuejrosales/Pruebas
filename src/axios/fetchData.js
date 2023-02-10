import axios from 'axios';
import wrapPromise from './wrapPromise.js';


function fetchData(url) {

    const promise = axios.get(url).then(({ data }) => data);

    return wrapPromise(promise);
}

export default fetchData;