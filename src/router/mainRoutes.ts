import { Router, Request, Response } from "express";
import Sitecontroller from "../controllers/SiteController";

const Mainrouter = Router();

Mainrouter.get("/", Sitecontroller.index);
Mainrouter.get("/dogs", Sitecontroller.dogs);
Mainrouter.get("/cats", Sitecontroller.cats);
Mainrouter.get("/fishes", Sitecontroller.fishes);

export default Mainrouter;
