class CurrentRecipe {
  constructor(store, onSubmit) {
    this.ref = document.getElementById("ingredientsList");
    this.store = store;
    this.onSubmit = onSubmit;
    store.onChange((props) => {
      this.render(props);
    });
  }

  addNewListElement(ingredientName) {
    const listElement = document.createElement("li");
    listElement.innerText = ingredientName;
    listElement.id = ingredientName;
    listElement.classList.add("listElement");
    this.list.appendChild(listElement);
    const removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    listElement.appendChild(removeButton);
    const removeIcon = document.createElement("i");
    removeButton.appendChild(removeIcon);
    removeButton.classList.add("removeButton");
    removeIcon.classList.add("fas");
    removeIcon.classList.add("fa-backspace");
    const onRemoveButtonClick = () => {
      this.store.dispatch((oldState) => {
        oldState = {
          ...oldState,
          currentRecipe: {
            ...oldState.currentRecipe,
            ingredients: oldState.currentRecipe.ingredients.filter(
              (ingredient) => {
                return ingredient !== ingredientName;
              }
            ),
          },
        };
        return oldState;
      });
    };

    removeButton.addEventListener("click", onRemoveButtonClick);
  }

  renderInput(props) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Type ingredient and press enter");
    this.ref.appendChild(input);
    input.classList.add("addIngredient");
    const addListElement = (event) => {
      if (event.key === "Enter") {
        const currentIngredient = input.value;
        input.value = "";
        if (props.currentRecipe.ingredients.includes(currentIngredient)) {
          return;
        }
        this.addNewListElement(input.value);
        this.store.dispatch((oldState) => {
          oldState.currentRecipe.ingredients.push(currentIngredient);
          return oldState;
        });
      }
    };

    input.addEventListener("keyup", addListElement);
  }

  renderList(ingredients) {
    this.list = document.createElement("ul");
    this.ref.appendChild(this.list);
    ingredients.forEach((ingredient) => {
      this.addNewListElement(ingredient);
    });
  }

  renderSubmitButton(props) {
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "button");
    submitButton.innerText = "Submit";
    submitButton.classList.add("submitButton");
    submitButton.disabled =
      props.currentRecipe.ingredients.length === 0 || !props.token;
    this.ref.appendChild(submitButton);
    submitButton.addEventListener("click", () => {
      this.onSubmit(props.currentRecipe.ingredients);
    });
  }

  render(props) {
    this.ref.innerHTML = "";
    this.renderInput(props);
    this.renderList(props.currentRecipe.ingredients);
    this.renderSubmitButton(props);
  }
}

export default CurrentRecipe;
