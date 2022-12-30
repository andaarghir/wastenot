"use strict";

const express = require('express');
const cors = require('cors');
const mealRouter = require("./mealRouter");

const app = express();
app.use((req, res, next) => {
    next()
})
app.use(express.json());
app.disable('etag');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));
app.use('', mealRouter);

app.listen(3001, () => { console.log("Server started") });