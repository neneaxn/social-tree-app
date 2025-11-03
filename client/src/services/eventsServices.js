import * as request from "../lib/dataFetcher";
import * as attendance from '../lib/dataFetcher'

const baseUrl = 'http://localhost:3030/jsonstore/events';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (eventId) => {
    const result = await request.get(`${baseUrl}/${eventId}`);

    return result;
}

export const create = async (eventData) => {
    const result = await request.post(baseUrl, eventData);
    
    // createAttendance(result._id);

    return result;
};

export const addAttendance =  async (eventId) => {
    const newAttendance = await request.post(`${baseUrl}/${eventId}/attendances`, {});
    
    return newAttendance;
};

export const removeAttendance =  async (eventId) => {
    const newAttendance = await request.remove(`${baseUrl}/${eventId}/attendances`);
    
    return newAttendance;
};