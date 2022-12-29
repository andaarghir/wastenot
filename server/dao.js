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
                    new Meal(m.id, m.title, m.description, m.category, m.allergens, m.options, m.price),
                ));
            }
        });
    });
}
module.exports = {readMeals}