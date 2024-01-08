import {baseURL} from '../config/WebService';

class ApiHelper {
  get = async url => {
    const response = await fetch(baseURL + url).then(data => data.json());

    return new Promise((resolve, reject) => {
      this.handleErrors(resolve, reject, response);
    });
  };

  post = (url, data) => {
    const response = fetch(baseURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return new Promise((resolve, reject) => {
      this.handleErrors(resolve, reject, response);
    });
  };

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
