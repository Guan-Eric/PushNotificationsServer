import express from "express";
import BodyParser from "body-parser";
import * as FirebaseService from "./FirebaseService";
import Expo from "expo-server-sdk";

const app = express();
const port = 8000;
const address = "localhost";

const expo = new Expo();

const jsonParser = BodyParser.json();
const httpParser = BodyParser.urlencoded({ extended: false });

app.post("/registerPushToken", jsonParser, async (req, res) => {
  try {
    const userId = String(req.body.userId);
    const token = String(req.body.token);
    await FirebaseService.saveToken(userId, token);
    res.status(200).send("success");
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, address, () =>
  console.log(`Running on Port ${port} and Address ${address}`)
);
