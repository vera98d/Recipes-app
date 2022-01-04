import CurrentRecipe from "./src/components/CurrentRecipe.js";
import Header from "./src/components/Header.js";
import Timer from "./src/components/Timer.js";
import LatestRecipesComponent from "./src/components/LatestRecipesComponent.js";
import Ingredients from "./src/components/Ingredients.js";
import RecipesStorage from "./src/storage/recipes.js";
import Store from "./src/storage/store.js";
import Modal from "./src/components/Modal.js";
import SpoonacularService from "./src/services/SpoonacularService.js";
import TokenInfo from "./src/components/TokenInfo.js";

const header = new Header();
header.render();
const timer = new Timer();
timer.render();

const recipesStorage = new RecipesStorage();
const latestRecipes = recipesStorage.load();
const store = new Store({
  latestRecipes: latestRecipes,
  currentRecipe: { ingredients: [] },
});
recipesStorage.plugInStore(store);

const tokenInfo = new TokenInfo(store);
tokenInfo.render({ token: store.state.token });

const fetchService = new SpoonacularService(store);

const ingredients = new Ingredients(store);
ingredients.render(store.state);

const currentRecipe = new CurrentRecipe(store, (ingredients) => {
  fetchService.findRecipesByIngredients(ingredients).then((data) => {
    store.dispatch((props) => ({
      ...props,
      latestRecipes: [...props.latestRecipes, data[0]],
      modal: data[0],
      currentRecipe: { ingredients: [] },
    }));
  });
});
currentRecipe.render(store.state);

const latestRecipesComponent = new LatestRecipesComponent(store);
latestRecipesComponent.render({ latestRecipes });

const modal = new Modal(store);
