import {Meal} from "./meal";

const APIURL = 'http://localhost:3001/api/v1';

async function addNewMeal(mealTitle, userId, description, category, allergens, option, price, city, img) {
    const url = APIURL + '/meals';
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: mealTitle,
                user_id: userId,
                description: description,
                category: category,
                allergens: allergens,
                option: option,
                price: price,
                city: city,
                img: img
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            // credentials: 'include'
        });
        if (response.ok) {
            return true;
        } else {
            // application error (404, 500, ...)
            console.log(response.statusText);
            const text = await response.text();
            throw new TypeError(text);
        }
    } catch (ex) {
        // network error
        console.log(ex);
        throw ex;
    }
}


export {addNewMeal};