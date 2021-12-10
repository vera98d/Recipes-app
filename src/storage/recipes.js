class RecipesStorage {
  save(recipes) {
    window.localStorage.setItem("recipes", JSON.stringify(recipes));
  }

  load() {
    return JSON.parse(window.localStorage.getItem("recipes"));
  }
}

export default RecipesStorage;
