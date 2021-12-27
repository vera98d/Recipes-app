export default class Modal {
  constructor() {
    this.ref = document.body;
  }

  render(props) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.padding = "20px";
    this.ref.appendChild(modal);

    const title = document.createElement("h3");
    title.innerText = props.title;
    title.style.textAlign = "center";
    modal.appendChild(title);

    const description = document.createElement("p");
    description.innerText = props.description;
    description.style.textAlign = "center";
    modal.appendChild(description);

    const ingredientsListHeader = document.createElement("p");
    ingredientsListHeader.innerText = "Ingredients:";
    ingredientsListHeader.style.textAlign = "center";
    modal.appendChild(ingredientsListHeader);

    const ingredientsList = document.createElement("ul");
    modal.appendChild(ingredientsList);

    for (let i = 0; i < props.ingredients.length; i++) {
      const ingredientsListItem = document.createElement("li");
      ingredientsListItem.innerText = props.ingredients[i];
      ingredientsListItem.style.textAlign = "center";
      ingredientsList.appendChild(ingredientsListItem);
    }

    const closeButton = document.createElement("button");
    closeButton.innerHTML = '<i class="far fa-times-circle"></i>';
    closeButton.addEventListener("click", (event) => {
      this.ref.querySelector("header").classList.toggle("modalActive");
      this.ref.querySelector("main").classList.toggle("modalActive");
      this.ref.querySelector("footer").classList.toggle("modalActive");
      modal.classList.toggle("modalActive");
      setTimeout(() => {
        modal.remove();
      }, 500);
    });
    modal.appendChild(closeButton);

    setTimeout(() => {
      this.ref.querySelector("header").classList.toggle("modalActive");
      this.ref.querySelector("main").classList.toggle("modalActive");
      this.ref.querySelector("footer").classList.toggle("modalActive");
      modal.classList.toggle("modalActive");
    }, 100);
  }
}
