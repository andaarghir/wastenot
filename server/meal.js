

/**
 * Constructor function for new Exam objects
 * @param {number} id meal id 
 * @param {string} title meal title
 * @param {string} description number of credits (e.g. 6)
 * @param {string} category
 * @param {string} allergens 
 * @param {string} options
 * @param {number} price
 */
function Meal(id, title, description, category, allergens, options, price) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.allergens = allergens;
    this.options = options;
    this.price = price;
}


/**
 * Create a new empty transcript object (a list of Exam objects)
 */
function MealList() {
    this.mealList = [];

    /**
     * Add a new exam to the list
     * @param {Meal} meal the exam to be added
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

