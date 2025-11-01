import * as request from "../lib/dataFetcher";

const baseUrl = 'http://localhost:3030/jsonstore/events';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const create = async (eventData) => {
    const result = await request.post(baseUrl, eventData)

    return result;
}