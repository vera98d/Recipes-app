class RecipesStorage {
  save(recipes) {
    window.localStorage.setItem("recipes", JSON.stringify(recipes));
  }

  load() {
    return JSON.parse(window.localStorage.getItem("recipes")) || [];
  }

  plugInStore(store) {
    store.onChange((props) => {
      if (props.latestRecipes && props.latestRecipes.length > 0) {
        this.save(props.latestRecipes);
      }
    });
  }
}

export default RecipesStorage;
