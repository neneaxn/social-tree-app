import * as request from '../lib/dataFetcher'

const baseUrl = 'http://localhost:3030/data/attendances';


export const getCount = async (eventId) => {
    const query = new URLSearchParams({
        where: `eventId="${eventId}"`,
        // load: `owner:=_ownerId:users`
    })

    const result = await request.get(`${baseUrl}?${query}`);
    
    // const result = await request.get(baseUrl);
    // console.log(result);
    
    // const returned = Object.values(result).filter(e => e.eventId === eventId);
    // console.log(returned);
    // console.log(returned.length);
    
    return result.length;
}

export const add =  async (eventId) => {
    const newAttendance = await request.post(baseUrl, { eventId });
    
    return newAttendance;
};

export const remove =  async (eventId) => {
    const newAttendance = await request.remove(baseUrl);
    
    return newAttendance;
};

// export const update = async(eventId, newData) => {
//     const result = await request.put(`${baseUrl}/${eventId}`, newData);

//     return result;
// }


// export const counter = async (eventId) => {
//     const newAttendance = await request.post(baseUrl, {
//         eventId,
//         counter
//     });

//     return newAttendance;
// };