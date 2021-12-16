class CurrentRecipe {
  constructor() {
    this.ref = document.getElementById("ingredientsList");
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
      this.list.removeChild(listElement);
    };

    removeButton.addEventListener("click", onRemoveButtonClick);
  }

  renderInput() {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Type ingredient and press enter");
    this.ref.appendChild(input);
    input.classList.add("addIngredient");
    const addListElement = (event) => {
      if (event.key === "Enter") {
        this.addNewListElement(input.value);
        input.value = "";
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

  renderSubmitButton() {
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "button");
    submitButton.innerText = "Submit";
    submitButton.classList.add("submitButton");
    this.ref.appendChild(submitButton);
  }

  render(props) {
    this.renderInput();
    this.renderList(props.currentRecipe.ingredients);
    this.renderSubmitButton();
  }
}

export default CurrentRecipe;
