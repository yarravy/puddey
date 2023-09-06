import { getData, setData, user } from './dataStore'
import HTTPError from 'http-errors';
import { v4 as uuidv4 } from 'uuid'

export function userSignUpV1(firstName: string, lastName: string, username: string, email: string, password: string): number {
    // Checks length of first and last name, and username
    if (firstName.length < 1 || lastName.length < 1 || username.length < 1) {
        throw HTTPError(400, 'name too short');
    }
    const data = getData();
    // Checks if username is taken
    let taken_user = data.users.find(user => user.username === username);
    if (taken_user !== undefined) {
        throw HTTPError(400, 'username taken');
    }
    // Checks email is valid
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
        throw HTTPError(400, 'invalid email address');
    }
    let taken_email = data.users.find(user => user.email == email);
    if (taken_email !== undefined) {
        throw HTTPError(400, 'account with given email already exists');
    }
    // Checks password 
    if (password.length < 8) {
        throw HTTPError(400, 'password length too short');
    } 
    if (password === password.toUpperCase()) {
        throw HTTPError(400, 'password does not contain lower case');
    }
    if (password === password.toLowerCase()) {
        throw HTTPError(400, 'password does not contain caps case');
    }
    if (!/[0-9]/.test(password)) {
        throw HTTPError(400, 'password does not contain any numbers');
    }
    let newUser: user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        username: username,
        userID: data.users.reduce((id, object) => Math.max(id, object['userID']), 0) + 1,
        sessions: [],
    }
    data.users.push(newUser);
    
    return newUser.userID;
}

export function userLoginV1(username: string, password: string): Object {
    const data = getData();
    let usernameMatch = data.users.findIndex(user => user.username === username);
    if (usernameMatch == -1) {
        throw HTTPError(400, 'no account matches the given username');
    }

    if (password !== data.users[usernameMatch].password) {
        throw HTTPError(400, 'password does not matches');
    }

    let newToken = uuidv4();
    data.users[usernameMatch].sessions.push(newToken);

    return { token: newToken };
}