import axios from 'axios';
import qs from 'qs';
import { API_ENDPOINT } from './constants/endpoints';

const parseResponse = ({ data }) => [data];

const onError = ({ response }) => {
  return [undefined, response.data.error];
};

function getInstance(
  baseUrl = '',
  url,
  { params, isFullUrl = false, ...rest } = {}
) {
  const finalUrl = isFullUrl
    ? url
    : `${baseUrl}${url.startsWith('/') ? url.slice(1, url.length) : url}`;
  return axios({
    method: 'get',
    params,
    url: finalUrl,
    paramsSerializer: (queryParams) =>
      qs.stringify(queryParams, { arrayFormat: 'repeat' }),
    ...rest,
  });
}

function postInstance(
  baseUrl = '',
  url,
  params,
  { isFullUrl = false, ...rest } = {}
) {
  const finalUrl = isFullUrl
    ? url
    : `${baseUrl}${url.startsWith('/') ? url.slice(1, url.length) : url}`;
  return axios({
    method: 'post',
    url: finalUrl,
    data: {
      ...params,
    },
    ...rest,
  });
}

function baseRequest(baseUrl) {
  return {
    get: (url, props) => () =>
      getInstance(baseUrl, url, props).then(parseResponse).catch(onError),
    post: (url, params, props) => () => {
      return postInstance(baseUrl, url, params, props)
        .then(parseResponse)
        .catch(onError);
    },
  };
}

const api = baseRequest(API_ENDPOINT);

export default api;
