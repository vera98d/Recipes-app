import CurrentRecipe from "./src/components/CurrentRecipe.js";
import Header from "./src/components/Header.js";
import Timer from "./src/components/Timer.js";
import Ingredients from "./src/components/Ingredients.js";
import RecipesStorage from "./src/storage/recipes.js";
import Store from "./src/storage/store.js";

const header = new Header();
header.render();
const timer = new Timer();
timer.render();

const ingredients = new Ingredients();
ingredients.render();

const recipe = new CurrentRecipe();
recipe.render({ currentRecipe: { ingredients: ["orange", "potato"] } });

const recipesStorage = new RecipesStorage();
const latestRecipes = recipesStorage.load();
const store = new Store({ latestRecipes: latestRecipes });
recipesStorage.plugInStore(store);
