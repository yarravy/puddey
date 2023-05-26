import express, {json, Request, Response} from 'express';
import errorhandler from 'errorhandler';

const HOST = "127.0.0.1";
const PORT = 3000;

const app = express();

app.listen(PORT, HOST, () =>{
    console.log(`Server is running on port ${PORT}`);
})

app.use(errorhandler());