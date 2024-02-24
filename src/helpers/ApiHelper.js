import {baseURL} from '../config/WebService';
import {create} from 'apisauce';

const api = create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
});

class ApiHelper {
  accessToken = undefined;

  getUpdatedHeader = headers => {
    return {};
    // if (this.accessToken) {
    //   return {...headers, 'X-Access-Token': this.accessToken};
    // } else {
    //   return headers;
    // }
  };

  get = async (url, data, headers) => {
    const updatedHeader = this.getUpdatedHeader(headers);
    const response = await api.get(url, data);

    return new Promise((resolve, reject) => {
      this.handleErrors(resolve, reject, response);
    });
  };

  post = async (url, data, headers) => {
    const updatedHeader = this.getUpdatedHeader(headers);

    console.log(this.accessToken);

    // const response = fetch(baseURL + url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });

    const response = await api.post(url, data);

    return new Promise((resolve, reject) => {
      this.handleErrors(resolve, reject, response);
    });
  };

  put = () => {};

  delete = () => {};

  handleErrors = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'NETWORK_ISSUE') {
        reject('You have network problem');
      }
      if (response.error.code === 'BANDWIDTH_ISSUE') {
        reject('You have network problem');
      }
    } else {
      resolve(response);
    }
  };
}

export default new ApiHelper();
