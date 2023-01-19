'use strict';

const sqlite = require('sqlite3');
const { Meal } = require('./meal');
const { Event } = require('./event');

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
                    new Meal(m.id, m.title, m.user_id, m.description, m.category, m.allergens, m.option, m.price, m.img),
                ));
            }
        });
    });
}

function addMeal(meal) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO meal (title, user_id, description, category, allergens, option, price, img) VALUES(?,?,?,?,?,?,?,?)`;
        db.run(sql, [meal.title, meal.user_id, meal.description, meal.category, meal.allergens, meal.option, meal.price, meal.img], (err) => {
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


function readEvents() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM event';
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((e) =>
                    new Event(e.id, e.title, e.user_id, e.menu_id, e.description, e.price, e.max_guests, e.address, e.city, e.date, e.menu),
                ));
            }
        });
    });
}

function searchEvent(date, price, city) {
    return new Promise((resolve, reject) => {
        const sql = `
        SELECT * 
        FROM event 
        WHERE date=? AND price <=? AND city=? `;
        db.all(sql, [date, price, city], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows.map((e) =>
                    new Event(e.id, e.title, e.user_id, e.menu_id, e.description, e.price, e.max_guests, e.address, e.city, e.date, e.menu),
                ));
            }
        });
    });
}

function addEvent(event) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO event (title, user_id, menu_id, description, price, max_guests, address, city, date, menu) VALUES(?,?,?,?,?,?,?,?,?,?)`;
        db.run(sql, [event.title, event.user_id, event.menu_id, event.description, event.price, event.max_guests, event.address, event.city, event.date, event.menu], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}


function deleteEvent(id) {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE from event WHERE id = ?';
        db.run(sql, [id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports = {readMeals, searchMeal, addMeal, deleteMeal, readEvents, searchEvent, addEvent, deleteEvent}