import * as request from "../lib/dataFetcher";


const baseUrl = 'http://localhost:3030/data/events';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (eventId) => {
    
    const result = await request.get(`${baseUrl}/${eventId}`);    
    return result;
}

export const create = async (eventData) => {
    const result = await request.post(baseUrl, eventData);

    return result;
};

export const edit = async (eventId, eventData) => {
    const result = await request.put(`${baseUrl}/${eventId}`, eventData)
    
    return result;
}

export const remove = async (eventId) => request.remove(`${baseUrl}/${eventId}`);

export const search = async (query) => {

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
        return []; // Return empty array if the query is blank
    }

    const filter = `title LIKE "${trimmedQuery}" OR location LIKE "${trimmedQuery}"`;

    const encodedFilter = encodeURIComponent(filter);
    const searchUrl = `${baseUrl}?where=${encodedFilter}`;

    const result = await request.get(searchUrl);

    return result;
};

export const getByOwner = async (userId) => {
    const where = `_ownerId="${userId}"`;
    const url = `${baseUrl}?where=${encodeURIComponent(where)}`;

    const result = await request.get(url);
    console.log(result);
    
    //!!server returns an array:
    return result;
};