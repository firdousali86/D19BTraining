class TestApiHelper {
  get = async url => {
    response = await fetch(url).then(data => data.json());

    //   const response = await api.post(url, data, {headers: updatedHeader});

    return new Promise((resolve, reject) => {
      this.handlerError(resolve, reject, response);
    });
  };

  post = async (url, data) => {
    const response = await fetch(baseURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return new Promise((resolve, reject) => {
      this.handlerError(resolve, reject, response);
    });
  };

  handlerError = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'Test') {
        reject('You have network problem');
      }
    } else {
      resolve(response);
    }
  };
}

export default new TestApiHelper();
