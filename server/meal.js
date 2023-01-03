

/**
 * Constructor function for new Meal objects
 * @param {number} id meal id 
 * @param {string} title meal title
 * @param {number} user_id user id 
 * @param {string} description 
 * @param {string} category
 * @param {string} allergens 
 * @param {string} option
 * @param {number} price
 */
function Meal(id, title, user_id, description, category, allergens, option, price) {
    this.id = id;
    this.title = title;
    this.user_id = user_id;
    this.description = description;
    this.category = category;
    this.allergens = allergens;
    this.option = option;
    this.price = price;
}


/**
 * Create a new empty transcript object (a list of Meal objects)
 */
function MealList() {
    this.mealList = [];

    /**
     * Add a new meal to the list
     * @param {Meal} meal the meal to be added
     */
    this.add = (meal) => {
        this.mealList.push(meal);
    };

    this.find = (id) => {
        const result = this.mealList.filter((meal) => meal.id === id);
        return result.length ? result[0] : undefined;
    };

    this.print = () => {
        this.mealList.forEach((meal, i) => {
            console.log(`${i + 1}) ${meal.title} - ${meal.description}`);
        });
    };


}

exports.Meal = Meal;
exports.MealList = MealList;

