import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/posts", PostController.create); 

export default router;
