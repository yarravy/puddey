import express, { json, Request, Response } from 'express';
import request from 'sync-request';
import config from '../config.json';
import { uId } from '../dataStore';

const port = config.port;
const url = config.url;

export function requestSignUp(username: string, password: string, firstName: string, lastName: string, dateOfBirth: Date, email: string): uId {
    const res = request(
        'POST',
        `${url}:${port}/auth/login/v3`,
        {
            json: {
                username,
                password,
                firstName,
                lastName,
                dateOfBirth,
                email
            }
        }
    );
}