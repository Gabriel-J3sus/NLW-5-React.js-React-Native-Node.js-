import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io'
import path from 'path'

import './database';
import { routes } from './routes';

const app = express();

// apenas para usar a pasta public com html

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// apenas para usar a pasta public com html

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
})

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
})

const http = createServer(app); //criando protocolo http
const io = new Server(http); //criando protocolo ws (websocket)

io.on("connection", (socket: Socket) => {
  console.log("conectado", socket.id);
});

app.use(express.json()); //faz o express entender dados no formato de json

app.use(routes);

export { http, io }
