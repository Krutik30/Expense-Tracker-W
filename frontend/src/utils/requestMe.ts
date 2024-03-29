import { HOST_URL } from '../config'

export const requestMe = async(route: string, option?: any) => {

    option = {
        ...option,
        method: option?.method ?? 'get',
        headers: {
            'Content-Type': 'application/json',
            ...option?.headers,
        },
    };
    console.log(option);

    return await fetch(HOST_URL + route, option)
        .then(async (res)=>{
            console.log(res)
            if (!res || !res.ok || res.status >= 400) {
                console.log('nai')
                throw res;
            }
            const response = await res.json();
            console.log(response)
            return response.payload;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
}