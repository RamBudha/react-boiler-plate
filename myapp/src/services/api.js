import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { CLIENT_ID } from '../constants/authorization';

const superagent = superagentPromise(_superagent, global.Promise);
let API_ROOT = '';
if (process.env.NODE_ENV === 'production') {
    API_ROOT = process.env.REACT_APP_API_ROOT;
} else {
    API_ROOT = 'http://localhost:4220/api';
}

const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
};

// const omitSlug = (data) => {
//   delete data.slug;
//   return data;
// };
const requests = {
    del: (url, body) => superagent.del(`${API_ROOT}${url}`).send(body).use(tokenPlugin).then(responseBody),
    get: url => superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    getData: url => superagent.get(url).use(tokenPlugin).then(responseBody)
};

const setAuthToken = (_token) => { token = _token; };

export function unauthApiUrl(url, symbol) {
    return requests.getData(`//api.soundcloud.com/${url}${symbol}client_id=${CLIENT_ID}`);
}

export {
    setAuthToken,
};
