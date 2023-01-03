'use strict';

const sqlite = require('sqlite3');
const { Meal } = require('./meal');

const db = new sqlite.Database('wastenot.db', (err) => {
    if (err) {
        throw err;
    }
});

function readMeals() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM meal';
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((m) =>
                    new Meal(m.id, m.title, m.user_id, m.description, m.category, m.allergens, m.options, m.price),
                ));
            }
        });
    });
}

function searchMeal(category, price) {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * 
        FROM meal 
        WHERE category=? AND price <=?`;
        db.all(sql, [category, price], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((m) =>
                    new Meal(m.id, m.title, m.user_id, m.description, m.category, m.allergens, m.options, m.price),
                ));
            }
        });
    });
}

function addMeal(meal) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO meal (title, user_id) VALUES(?,?)';
        db.run(sql, [meal.title, meal.user_id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports = {readMeals, searchMeal, addMeal}