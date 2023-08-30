import express, { json, Request, Response } from 'express';
import { loadData, saveData } from './dataStore'
import { userSignUpV1 } from './user'
import { clearV1 } from './other'

const app = express();
const port = 3000;
const SAVE_INTERVAL_SECONDS = 30;
let saveInterval: NodeJS.Timer;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log("Server is listening on post");
    loadData();
    saveInterval = setInterval(saveData, SAVE_INTERVAL_SECONDS * 1000);
})

app.delete('/clear/v1', (req: Request, res: Response) => {
    return res.json(clearV1());
})

app.post('/user/signUp/v1', (req: Request, res: Response) => {
    const { firstName, lastName, username, email, password } = req.body;
    return res.json(userSignUpV1(firstName, lastName, username, email, password));
})
