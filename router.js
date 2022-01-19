import Router from "express";
import TeleController from "./TeleController.js";

const router = new Router();

router.post("/tele", TeleController.create); 

export default router;
