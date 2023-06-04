export type uId = number;

export type user = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    uId: number;
}

export type DATA = {
    users: user[]
}

let data: DATA = {
    users: []
}

export function getData() {
    return data;
}

export function setData(newData: DATA) {
    data = newData;
}