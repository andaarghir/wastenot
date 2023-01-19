

/**
 * Constructor function for new Event objects
 * @param {number} id event id 
 * @param {string} title event title
 * @param {number} user_id user id 
 * @param {number} menu_id user id 
 * @param {string} description 
 * @param {number} price
 * @param {number} max_guests
 * @param {string} address 
 * @param {string} city
 * @param {date} date
 * @param {string} menu
 */
function Event(id, title, user_id, menu_id, description, price, max_guests, address, city, date, menu) {
    this.id = id;
    this.title = title;
    this.user_id = user_id;
    this.menu_id = menu_id;
    this.description = description;
    this.price = price;
    this.max_guests = max_guests;
    this.address = address;
    this.city = city;
    this.date = date;
    this.menu = menu;
}


/**
 * Create a new empty transcript object (a list of Event objects)
 */
function EventList() {
    this.eventList = [];

    /**
     * Add a new event to the list
     * @param {Event} event the event to be added
     */
    this.add = (event) => {
        this.eventList.push(event);
    };

    this.find = (id) => {
        const result = this.eventList.filter((event) => event.id === id);
        return result.length ? result[0] : undefined;
    };

    this.print = () => {
        this.eventList.forEach((event, i) => {
            console.log(`${i + 1}) ${event.title} - ${event.description}`);
        });
    };


}

exports.Event = Event;
exports.EventList = EventList;

