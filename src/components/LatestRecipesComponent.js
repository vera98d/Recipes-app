export default class LatestRecipesComponent {
  constructor(store) {
    this.ref = document.querySelector(".latestRecipes");
    this.store = store;
    store.onChange((props) => {
      if (props.latestRecipes && props.latestRecipes.length > 0) {
        this.render(props);
      }
    });
  }

  render(props) {
    this.currentPage = 1;

    this.ref.style.display = "flex";
    this.ref.style.flexDirection = "column";
    this.ref.style.padding = "20px 10px";

    if (props.latestRecipes.length > 7) {
      this.ref.innerHTML = `
        <h3>Your latest recipes</h3>
        <div class='recipesListContainer'></div>
        <div class='paginationContainer'></div>
        `;
    } else {
      this.ref.innerHTML = `
        <h3>Your latest recipes</h3>
        <div class='recipesListContainer'></div>
        `;
    }

    const recipesListContainer = this.ref.querySelector(
      ".recipesListContainer"
    );
    recipesListContainer.style.display = "flex";
    recipesListContainer.style.flexDirection = "column";
    this.#renderRecipesList(props, recipesListContainer);

    if (props.latestRecipes.length > 7) {
      const paginationContainer = this.ref.querySelector(
        ".paginationContainer"
      );
      paginationContainer.style.display = "flex";
      paginationContainer.style.justifyContent = "space-between";
      this.#renderPagination(props, paginationContainer, recipesListContainer);
    }
  }

  #renderRecipesList(props, recipesListContainer) {
    recipesListContainer.innerHTML = "";

    const recipesList = document.createElement("ul");
    recipesListContainer.appendChild(recipesList);

    for (
      let i = (this.currentPage - 1) * 7;
      i < this.currentPage * 7 && i < props.latestRecipes.length;
      i++
    ) {
      const recipesListItem = document.createElement("li");
      recipesList.appendChild(recipesListItem);
      const recipesListItemLink = document.createElement("a");
      recipesListItemLink.innerText = props.latestRecipes[i].title;
      recipesListItemLink.href = "#";

      recipesListItemLink.addEventListener("click", (event) => {
        this.store.dispatch((state) => {
          return { ...state, modal: props.latestRecipes[i] };
        });
      });

      recipesListItem.appendChild(recipesListItemLink);
    }
  }

  #renderPagination(props, paginationContainer, recipesListContainer) {
    const leftButton = document.createElement("button");
    leftButton.setAttribute("type", "button");
    leftButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    paginationContainer.appendChild(leftButton);

    const pageInfo = document.createElement("p");
    pageInfo.style.display = "inline";
    paginationContainer.appendChild(pageInfo);

    const rightButton = document.createElement("button");
    rightButton.setAttribute("type", "button");
    rightButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    paginationContainer.appendChild(rightButton);

    leftButton.addEventListener("click", (event) => {
      this.currentPage -= 1;
      this.#renderRecipesList(props, recipesListContainer);
      this.#handlePageChange(
        leftButton,
        rightButton,
        pageInfo,
        Math.ceil(props.latestRecipes.length / 7)
      );
    });

    rightButton.addEventListener("click", (event) => {
      this.currentPage += 1;
      this.#renderRecipesList(props, recipesListContainer);
      this.#handlePageChange(
        leftButton,
        rightButton,
        pageInfo,
        Math.ceil(props.latestRecipes.length / 7)
      );
    });

    this.#handlePageChange(
      leftButton,
      rightButton,
      pageInfo,
      Math.ceil(props.latestRecipes.length / 7)
    );
  }

  #handlePageChange(leftButton, rightButton, pageInfo, maxPage) {
    leftButton.disabled = this.currentPage === 1;
    rightButton.disabled = this.currentPage === maxPage;

    pageInfo.innerText = `Page ${this.currentPage} of ${maxPage}`;
  }
}
