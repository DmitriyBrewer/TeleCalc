import Router from "express";

import PostController from "./PostController.js";

const router = new Router();

//Раздел 5 пункт 4

router.post("/posts", PostController.create); //Раздел 6 пункт 3

router.get("/posts", PostController.getAll);

router.get("/posts:id", PostController.getOne);

router.put("/posts", PostController.update);

router.delete("/posts:id", PostController.delete);

export default router;
