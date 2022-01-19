import express from "express";

import mongoose from "mongoose";

import router from "./router.js";

const PORT = 5000;

const DB_URL =
  "mongodb+srv://Test:test@cluster0.5re06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();


//Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  //Cors
  app.use(express.json());


app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    app.listen(PORT, () => console.log("Server Starter on PORT " + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
