const axios = require('axios');

const get = async (path, auth = false) => {
    const headers = doAuthHeader(auth);

    const res = await axios({
        url: process.env.REACT_APP_API_URL + path,
        method: 'GET',
        headers
    });

    return {
        status: res.data.status,
        message: res.data.message,
        data: res.data.data
    }
}

const post = async (path, data, method = "POST", auth = true) => {
    const headers = doAuthHeader(auth);

    // lets decide if it's an update or new record
    if (data.Id && parseInt(data.Id) > 0) {
        path += `/${data.Id}`;
        method = 'PUT';
    }

    try {
        const res = await axios({
            url: process.env.REACT_APP_API_URL + path,
            method: method,
            headers: headers,
            data,
        });

        return {
            status: res.data.status,
            message: res.data.message,
            data: res.data.data
        };
    } catch (err) {
        return {
            status: err.response.data.status,
            message: err.response.data.message,
            data: err.response
        }
    }
}

export {
    get,
    post
}

function doAuthHeader(auth) {
    const headers = { 'Content-Type': 'application/json' };

    if (auth !== true) return headers;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData == null) {
        throw new Error("Not logged In");
    }
    headers['Authorization'] = `Bearer ${userData.token}`;
    return headers;
}