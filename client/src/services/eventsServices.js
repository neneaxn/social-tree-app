const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    
};

export const create = async (eventData) => {
    const response = await fetch(`${baseUrl}/events`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });

    const result = await response.json();

    return result;
}