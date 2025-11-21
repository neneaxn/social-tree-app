import * as request from '../lib/dataFetcher'

const baseUrl = 'http://localhost:3030/data/attendances';


export const getCount = async (eventId) => {
    const where = `eventId="${eventId}"`;
    //combines where and count; returns a number
    const url = `${baseUrl}?where=${encodeURIComponent(where)}&count`;
    const result = await request.get(url);
    return result; 
}

export const add =  async (eventId) => {
    const newAttendance = await request.post(baseUrl, { eventId });
    
    return newAttendance;
};

export const remove =  async (attendanceId) => request.remove(`${baseUrl}/${attendanceId}`);

export const getByUserAndEvent = async (eventId, userId) => {
    const where = `eventId="${eventId}" AND _ownerId="${userId}"`;
    const url = `${baseUrl}?where=${encodeURIComponent(where)}`;

    const result = await request.get(url);
    console.log(result);
    
    //!!server returns an array:
    return result[0] || null;
}
