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

// GET meal by category, price
router.get(PREFIX + '/meals/:category/:price/:city/:option',
    (req, res) => {
        dao.searchMeal(req.params.category, req.params.price, req.params.city, req.params.option).then(
            (value) => {
                res.json(value);
            }
        ).catch(
            (err) => {
                res.status(500).json({ error: err });
            }
        );
    });


// POST meal

router.post(PREFIX + '/meals',
    
    async (req, res) => {
        const meal = req.body;
        try {
            const value = await dao.addMeal(meal);
            res.end();
        } catch (e) {
            res.status(400).json({ error: e });
        }
    });    

    //DELETE meal
    
router.delete(PREFIX + '/meals/delete/:id',
  //  isLoggedIn,
    async (req, res) => {
        try {
            const value = await dao.deleteMeal(req.params.id);
            res.end();
        } catch (e) {
            res.status(400).json({ error: e });
        }
    });    

    // RUN SERVER
module.exports = router;