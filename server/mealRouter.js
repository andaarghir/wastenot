'use strict';
var express = require('express');
const dao = require('./dao');

const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(express.json());
app.use(cors());

var router = express.Router();

const PREFIX = '/api/v1';
// GET meals

router.get(PREFIX + '/meals',
    (req, res) => {
        dao.readMeals().then(
            (value) => {
                res.json(value);
            }
        ).catch(
            (err) => {
                res.status(500).json({ error: err });
            }
        );
    });