import * as requestTypes from '../../constants/requestTypes';
import * as actionTypes from '../../constants/actionTypes';
import { unauthApiUrl } from '../../services/api';
import { setRequestInProcess } from '../request/request';

export const fetchActivitiesByGenre = (nextHref, genre) => {
    return {
        type: actionTypes.GET_GENRE_DATA_FROM_CLOUD,
        url,
        requestType,
    };
};

export function setSelectedGenre(genre) {
    return {
        type: actionTypes.SET_SELECTED_GENRE,
        genre
    };
}

const requestType = requestTypes.GENRES;
const initHref = unauthApiUrl(`tracks?linked_partitioning=1&limit=20&offset=0&tags=${genre}`, '&');
const url = nextHref || initHref;
