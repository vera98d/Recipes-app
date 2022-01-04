const listOfIngredients = [
  {
    imageSrc: new URL("../../assets/images/cheese.jpg", import.meta.url),
    title: "Cheese",
  },
  {
    imageSrc: new URL("../../assets/images/ham.jpg", import.meta.url),
    title: "Ham",
  },
  {
    imageSrc: new URL("../../assets/images/eggs.jpg", import.meta.url),
    title: "Eggs",
  },
  {
    imageSrc: new URL("../../assets/images/butter.jpg", import.meta.url),
    title: "Butter",
  },
  {
    imageSrc: new URL("../../assets/images/apple.jpg", import.meta.url),
    title: "Apples",
  },
  {
    imageSrc: new URL("../../assets/images/milk.jpg", import.meta.url),
    title: "Milk",
  },
  {
    imageSrc: new URL("../../assets/images/tomatoes.jpg", import.meta.url),
    title: "Tomatoes",
  },
  {
    imageSrc: new URL("../../assets/images/peppers.jpg", import.meta.url),
    title: "Peppers",
  },
  {
    imageSrc: new URL("../../assets/images/cucumbers.jpg", import.meta.url),
    title: "Cucumbers",
  },
  {
    imageSrc: new URL("../../assets/images/broccoli.jpg", import.meta.url),
    title: "Broccoli",
  },
  {
    imageSrc: new URL("../../assets/images/onion.jpg", import.meta.url),
    title: "Onion",
  },
  {
    imageSrc: new URL("../../assets/images/bacon.jpg", import.meta.url),
    title: "Bacon",
  },
  {
    imageSrc: new URL("../../assets/images/cream-cheese.jpg", import.meta.url),
    title: "Cream cheese",
  },
  {
    imageSrc: new URL("../../assets/images/sausage.jpg", import.meta.url),
    title: "Sausage",
  },
  {
    imageSrc: new URL("../../assets/images/chicken.jpg", import.meta.url),
    title: "Chicken",
  },
  {
    imageSrc: new URL("../../assets/images/lemons.jpg", import.meta.url),
    title: "Lemons",
  },
  {
    imageSrc: new URL("../../assets/images/ground-meat.jpg", import.meta.url),
    title: "Ground-meat",
  },
  {
    imageSrc: new URL("../../assets/images/beef.jpg", import.meta.url),
    title: "Beef",
  },
  {
    imageSrc: new URL("../../assets/images/potatoes.jpg", import.meta.url),
    title: "Potatoes",
  },
  {
    imageSrc: new URL("../../assets/images/strawberries.jpg", import.meta.url),
    title: "Strawberries",
  },
  {
    imageSrc: new URL("../../assets/images/lettuce.jpg", import.meta.url),
    title: "Lettuce",
  },
  {
    imageSrc: new URL("../../assets/images/pasta.jpg", import.meta.url),
    title: "Pasta",
  },
  {
    imageSrc: new URL("../../assets/images/juice.jpg", import.meta.url),
    title: "Juice",
  },
  {
    imageSrc: new URL("../../assets/images/bread.jpg", import.meta.url),
    title: "Bread",
  },
  {
    imageSrc: new URL("../../assets/images/salami.jpg", import.meta.url),
    title: "Salami",
  },
  {
    imageSrc: new URL("../../assets/images/olives.jpg", import.meta.url),
    title: "Olives",
  },
  {
    imageSrc: new URL(
      "../../assets/images/greek-feta-cheese.jpg",
      import.meta.url
    ),
    title: "Greek feta cheese",
  },
  {
    imageSrc: new URL("../../assets/images/mushroom.jpg", import.meta.url),
    title: "Mushrooms",
  },
  {
    imageSrc: new URL("../../assets/images/tuna.jpg", import.meta.url),
    title: "Tuna",
  },
  {
    imageSrc: new URL("../../assets/images/spinach.jpg", import.meta.url),
    title: "Spinach",
  },
  {
    imageSrc: new URL("../../assets/images/asparagus.jpg", import.meta.url),
    title: "Asparagus",
  },
  {
    imageSrc: new URL("../../assets/images/raspberries.jpg", import.meta.url),
    title: "Raspberries",
  },
  {
    imageSrc: new URL("../../assets/images/blueberries.jpg", import.meta.url),
    title: "Blueberries",
  },
  {
    imageSrc: new URL("../../assets/images/avocado.jpg", import.meta.url),
    title: "Avocado",
  },
  {
    imageSrc: new URL("../../assets/images/olive-oil.jpg", import.meta.url),
    title: "Olive oil",
  },
  {
    imageSrc: new URL("../../assets/images/flour.jpg", import.meta.url),
    title: "Flour",
  },
  {
    imageSrc: new URL("../../assets/images/corn.jpg", import.meta.url),
    title: "Corn",
  },
  {
    imageSrc: new URL("../../assets/images/chocolate.jpg", import.meta.url),
    title: "Chocolate",
  },
  {
    imageSrc: new URL("../../assets/images/banana.jpg", import.meta.url),
    title: "Banana",
  },
  {
    imageSrc: new URL("../../assets/images/carrot.jpg", import.meta.url),
    title: "Carrot",
  },
  {
    imageSrc: new URL("../../assets/images/chives.jpg", import.meta.url),
    title: "Chives",
  },
  {
    imageSrc: new URL("../../assets/images/peas.jpg", import.meta.url),
    title: "Green peas",
  },
  {
    imageSrc: new URL("../../assets/images/water.jpg", import.meta.url),
    title: "Water",
  },
  {
    imageSrc: new URL("../../assets/images/broad-beans.jpg", import.meta.url),
    title: "Broad beans",
  },
  {
    imageSrc: new URL("../../assets/images/orange.jpg", import.meta.url),
    title: "Orange",
  },
  {
    imageSrc: new URL("../../assets/images/garlic.jpg", import.meta.url),
    title: "Garlic",
  },
  {
    imageSrc: new URL("../../assets/images/peanut-butter.jpg", import.meta.url),
    title: "Peanut butter",
  },
  {
    imageSrc: new URL("../../assets/images/hazelnuts.jpg", import.meta.url),
    title: "Hazelnuts",
  },
  {
    imageSrc: new URL("../../assets/images/walnuts.jpg", import.meta.url),
    title: "Walnuts",
  },
  {
    imageSrc: new URL("../../assets/images/buckwheat.jpg", import.meta.url),
    title: "Buckwheat groats",
  },
  {
    imageSrc: new URL("../../assets/images/rice.jpg", import.meta.url),
    title: "Rice",
  },
  {
    imageSrc: new URL("../../assets/images/cranberry.jpg", import.meta.url),
    title: "Cranberry",
  },
  {
    imageSrc: new URL("../../assets/images/zucchini.jpg", import.meta.url),
    title: "Zucchini",
  },
  {
    imageSrc: new URL("../../assets/images/aubergine.jpg", import.meta.url),
    title: "Aubergine",
  },
  {
    imageSrc: new URL("../../assets/images/salt.jpg", import.meta.url),
    title: "Salt",
  },
  {
    imageSrc: new URL("../../assets/images/pepper.jpg", import.meta.url),
    title: "Pepper",
  },
  {
    imageSrc: new URL("../../assets/images/sugar.jpg", import.meta.url),
    title: "Sugar",
  },
];

function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

class Ingredients {
  constructor(store) {
    this.ref = document.querySelector(".ingredientsGrid");
    this.store = store;
    const debouncedRender = debounce(this.render.bind(this), 1000);
    window.addEventListener("resize", debouncedRender);
    this.memory = {};
  }

  addIngredient() {
    const random = this.getUniqueIngredientIndex();
    const itemOfIngredients = document.createElement("div");
    itemOfIngredients.classList.add("image");
    itemOfIngredients.innerHTML = `
        <img src='${listOfIngredients[random].imageSrc}' alt="${listOfIngredients[random].title}" />
        <span>${listOfIngredients[random].title}</span>
        `;

    itemOfIngredients.addEventListener("click", () => {
      this.store.dispatch((oldState) => {
        const ingredient = listOfIngredients[random].title;
        const ingredients = oldState.currentRecipe.ingredients;
        if (!ingredients.includes(ingredient) && ingredient) {
          oldState.currentRecipe.ingredients.push(ingredient);
        }
        return oldState;
      });
    });
    this.ref.appendChild(itemOfIngredients);
  }

  render() {
    this.ref.innerHTML = "";
    this.memory = {};
    let breakPoint = window.matchMedia("(max-width: 480px)");
    const numberOfElements = breakPoint.matches ? 4 : 9;

    for (let i = 0; i < numberOfElements; i++) {
      this.addIngredient();
    }
  }

  getUniqueIngredientIndex() {
    const i = Math.floor(Math.random() * listOfIngredients.length);
    if (!this.memory[i]) {
      this.memory[i] = true;
      return i;
    }
    return this.getUniqueIngredientIndex();
  }
}

export default Ingredients;
