const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        }
    }

    const token = localStorage.getItem('accessToken');
    const isAdmin = localStorage.getItem('isAdmin');

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    if (isAdmin === 'true' && token) {
        options.headers = {
            ...options.headers,
            'X-Admin': 'true'
        }
    }

    return options;
}

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    if (!response.ok) {
        let errorBody = {};
        try {
            errorBody = await response.json();
        } catch (e) {
            throw { message: `Server error (${response.status}): Could not parse error response.` };
        }
        throw errorBody;
    }

    const result = await response.json();

    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');