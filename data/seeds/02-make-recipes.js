const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken' },
    { recipe_name: 'Salmon en Papillote' },
]

const ingredients = [
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pesto', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pasta', ingredient_unit: 'lbs' },
    { ingredient_name: 'Lemon', ingredient_unit: 'slices' },
    { ingredient_name: 'Chicken', ingredient_unit: 'kilos' },
    { ingredient_name: 'Salmon', ingredient_unit: 'grams' },
]

const steps = [
    // Broccoli Pesto Pasta
    { step_text: 'Heat pan', step_number: 1, recipe_id: 1 },
    { step_text: 'Add Broccoli', step_number: 2, recipe_id: 1 },
    { step_text: 'Add pesto mixed with pasta', step_number: 3, recipe_id: 1 },
    // Lemon Chicken
    { step_text: 'Heat oven', step_number: 1, recipe_id: 2 },
    { step_text: 'Put chicken and lemon in oven', step_number: 2, recipe_id: 2 },
    { step_text: 'Put in oven at 500 degrees', step_number: 3, recipe_id: 2 },
    // Salmon en Papillote
    { step_text: 'Fish a salmon in the Bidasoa river', step_number: 1, recipe_id: 3 },
    { step_text: 'Cook salmon', step_number: 2, recipe_id: 3 },
    
]

exports.seed = function (knex) {
   
}
