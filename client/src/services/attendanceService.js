import * as request from '../lib/dataFetcher'

const baseUrl = 'http://localhost:3030/jsonstore/attendances';

// export const counter = async (eventId) => {
//     const newAttendance = await request.post(baseUrl, {
//         eventId,
//         counter
//     });

//     return newAttendance;
// };

export const getCount = async (eventId) => {
    const query = new URLSearchParams({
        where: `eventId="${eventId}"`
    })

    // const result = await request.get(`${baseUrl}?${query}`)
    const result = await request.get(baseUrl);
    const returned = Object.values(result).filter(e => e.eventId === eventId);
    console.log(returned);
    console.log(returned.length);
    
    return returned.length;
}

// export const update = async(eventId, newData) => {
//     const result = await request.put(`${baseUrl}/${eventId}`, newData);

//     return result;
// }