import server from "./server";
import router from "./router/mainRoutes";
import mustache from "mustache-express";
import path from "path";
import express from "express";

server.use(express.static(path.join(__dirname, "./public/")));
server.engine("mustache", mustache());
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));

server.use(router);
