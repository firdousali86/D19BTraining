class ApiHelper {

    get = url => {
        return fetch(url).then(data => data.json());


    };

    post = () => {
    }
}
export default new ApiHelper();