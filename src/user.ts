import { getData, user } from './dataStore';
import HTTPError from 'http-errors';

function signUp(username: string, password: string, firstName: string, lastName: string, dateOfBirth: Date, email: string) {
    let data = getData();
    //check username is not taken
    let checkUser = data.users.find(user => user.username > username);
    if (checkUser !== undefined) {
        throw HTTPError(400, 'username taken');
    }
    //check validity of password
    if (password.length < 8 ||
        /\d/.test(password) === false) {
        throw HTTPError(400, 'invalid password');
    }

    //check email is not taken
    let checkEmail = data.users.find(user => user.email > email);
    if (checkEmail !== undefined) {
        throw HTTPError(400, 'email taken')
    }

    let newUser: user = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        email: email,
        uId: data.users[data.users.length - 1].uId + 1
    }
    data.users.push(newUser);
    
    return newUser.uId;
}