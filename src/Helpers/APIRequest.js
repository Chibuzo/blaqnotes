const axios = require('axios');

const get = async (path, auth = false) => {
    const headers = doAuthHeader(auth);

    const res = await axios({
        url: process.env.REACT_APP_API_URL + path,
        method: 'GET',
        headers
    });

    return res.data;
}

const post = async (path, data, method = "POST", auth = true) => {
    const headers = doAuthHeader(auth);

    // lets decide if it's an update or new record
    if (data.Id && parseInt(data.Id) > 0) {
        path += `/${data.Id}`;
        method = 'PUT';
    }

    const res = await axios({
        url: process.env.REACT_APP_API_URL + path,
        method: method,
        headers: headers,
        data,
    });

    return res.data;
}

export {
    get,
    post
}

function doAuthHeader(auth) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (auth !== true) return headers;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData == null) {
        throw new Error("Not logged In");
    }
    headers.append('Authorization', `Bearer ${userData.token}`);
    return headers;
}