import * as request from '../lib/dataFetcher'

const baseUrl = 'http://localhots:3030/jsonstore/attendancies';

// export const counter = async (eventId) => {
//     const newAttendance = await request.post(baseUrl, {
//         eventId,
//         counter
//     });

//     return newAttendance;
// };

export const getCount = async (eventId) => {
    const result = await request.get(baseUrl)
    console.log(result);
    
    return Object.values(result);
}