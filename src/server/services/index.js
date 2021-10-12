const axios = require('axios');

const doRequest = () => (url, params) => {
  return axios.get(url, params);
};

// Fetch data
const get = (req, url) => () =>
  doRequest(req)(url, {
    responseType: 'json',
  });

const service = (req, url) => {
  if (!req) {
    // eslint-disable-next-line
    console.warn('services/searches: you must provide a req object');
  }
  return {
    get: get(req, url),
  };
};

const getDataProductListPage = (req) =>
  service(req, 'http://demo0563339.mockable.io/product');

export { getDataProductListPage };
