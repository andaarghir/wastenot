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
                    new Meal(m.id, m.title, m.user_id, m.description, m.category, m.allergens, m.option, m.price),
                ));
            }
        });
    });
}

function searchMeal(category, price, city, option) {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * 
        FROM meal 
        WHERE category=? AND price <=? AND city=? and option=?`;
        db.all(sql, [category, price, city, option], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((m) =>
                    new Meal(m.id, m.title, m.user_id, m.description, m.category, m.allergens, m.option, m.price),
                ));
            }
        });
    });
}

function addMeal(meal) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO meal (title, user_id, description, category, allergens, option, price) VALUES(?,?,?,?,?,?,?)`;
        db.run(sql, [meal.title, meal.user_id, meal.description, meal.category, meal.allergens, meal.option, meal.price], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}


function deleteMeal(id) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE from meal WHERE id = ?';
        db.run(sql, [id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}
module.exports = {readMeals, searchMeal, addMeal, deleteMeal}