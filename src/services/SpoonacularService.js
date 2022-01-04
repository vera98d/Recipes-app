class SpoonacularService {
  constructor(store) {
    this.apiKey = undefined;
    store.onChange((props) => {
      if (props.token && this.apiKey !== props.token) {
        this.apiKey = props.token;
      }
    });
  }

  async findRecipesIdsByIngredients(ingredients) {
    if (!this.apiKey) {
      throw new Error("no api key");
    }
    let url = "https://api.spoonacular.com/recipes/findByIngredients";
    url += `?apiKey=${this.apiKey}`;
    url += `&ingredients=${ingredients.join(",")}`;
    url += "&includeInstruction=true";
    url += "&number=1";
    const response = await fetch(url);
    const data = await response.json();
    return data.map(({ id }) => id);
  }

  async findRecipesByIngredients(ingredients) {
    if (!this.apiKey) {
      throw new Error("no api key");
    }

    const recipesIds = await this.findRecipesIdsByIngredients(ingredients);
    let url = "https://api.spoonacular.com/recipes/informationBulk";
    url += `?ids=${recipesIds.join(",")}`;
    url += `&apiKey=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const recipes = data.map(
      ({ id, instructions, title, image, extendedIngredients }) => {
        return {
          id,
          title,
          image,
          description: instructions,
          ingredients: extendedIngredients.map(({ name }) => name),
        };
      }
    );

    return recipes.filter(({ description }) => !!description);
  }
}

export default SpoonacularService;
