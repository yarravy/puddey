import request from 'sync-request';
import config from '../src/config.json';
import { clearV1 } from '../src/other'

const port = config.port;
const url = config.url;

export function requestClearV1(): Object {
    const res = request(
        'DELETE',
        `${url}:${port}/clear/v1`
    );  
    return JSON.parse(res.getBody() as string);
}

export function requestUserSignUpV1(firstName: string, lastName: string,
                                    username: string, email: string, 
                                    password: string): number {
    const res = request(
        'POST',
        `${url}:${port}/user/signUp/v1`,
        {
            json: {
                firstName,
                lastName,
                username,
                email,
                password,
            }
        }
    )
    if (res.statusCode !== 200) {
        return res.statusCode;
    }    
    return JSON.parse(res.getBody() as string);
}

export function requestUserLoginV1(username: string, password: string): Object | number {
    const res = request(
        'POST',
        `${url}:${port}/user/login/v1`,
        {
            json: {
                username,
                password,
            }
        }
    )
    if (res.statusCode !== 200) {
        return res.statusCode;
    }    
    return JSON.parse(res.getBody() as string);
}