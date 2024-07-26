import express from "express";
import BodyParser from "body-parser";
import Expo from "expo-server-sdk";

const app = express();
const port = 8000;
const address = "192.168.2.44";

const expo = new Expo();

const jsonParser = BodyParser.json();
const httpParser = BodyParser.urlencoded({ extended: false });

app.post(`/sendPushNotification`, jsonParser, async (req, res) => {
  expo.sendPushNotificationsAsync([
    { to: req.body.token, title: "Gym Pulse", body: req.body.body },
  ]);
  res.status(200).send("success");
});

app.listen(port, address, () =>
  console.log(`Running on Port ${port} and Address ${address}`)
);
