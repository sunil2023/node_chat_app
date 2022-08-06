import express from 'express';
import { createServer} from "http";
import { Server } from 'socket.io';


const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);
const port = process.env.PORT || 8000;
httpServer.listen(port, ()=> console.log(`Listing on post ${port}...`)); 