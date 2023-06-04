import express, { json, Request, Response } from 'express';


const app = express();
const port = "3000";
const host = "127.0.0.1";

const server = app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });



process.on('SIGINT', () => {
    server.close(() => {
        console.log('\nShutting down server gracefully.');
    });
});
  