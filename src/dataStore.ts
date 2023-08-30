import e from "express"
import { writeFile, readFile } from 'fs'

export type data = {
    users: user[],
}

export type user = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    userID: number,
} 

const DATA: data = {
    users: [],
}

export function getData(): data {
    return DATA;
}

export function setData(data: data) {
    DATA.users = data.users;
    return;
}

const file = './data.json';

export function saveData(): void | Error {
  console.log('Saving data...');
  writeFile(file, JSON.stringify(DATA), (err) => {
    if (err) {
      console.log('☠ Data save to', file, 'failed:\n', err);
    }
    console.log('✔ Saved data to', file);
  });
}

export function loadData() {
  console.log('Loading data...');
  readFile(file, (err, data) => {
    if (err) {
      console.log('Data load from', file, 'failed:\n', err);
      return;
    }
    setData(JSON.parse(data.toString()));
    console.log('✔ Loaded data from', file);
  });
}
