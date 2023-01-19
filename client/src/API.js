import {Event} from "./event";

const APIURL = 'http://localhost:3001/api/v1';

async function addNewEvent(eventTitle, userId, menu_id, description, price, max_guests, address, city, date, menu) {
    const url = APIURL + '/events';
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                title: eventTitle,
                user_id: userId,
                menu_id: menu_id,
                description: description,
                price: price,
                max_guests: max_guests,
                address: address,
                city: city,
                date: date,
                menu: menu
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


export {addNewEvent};