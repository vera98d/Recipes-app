const listOfIngredients = [
  {
    imageSrc: new URL("../../images/cheese.jpg", import.meta.url),
    title: "Cheese",
  },
  { imageSrc: new URL("../../images/ham.jpg", import.meta.url), title: "Ham" },
  {
    imageSrc: new URL("../../images/eggs.jpg", import.meta.url),
    title: "Eggs",
  },
  {
    imageSrc: new URL("../../images/butter.jpg", import.meta.url),
    title: "Butter",
  },
  {
    imageSrc: new URL("../../images/apple.jpg", import.meta.url),
    title: "Apples",
  },
  {
    imageSrc: new URL("../../images/milk.jpg", import.meta.url),
    title: "Milk",
  },
  {
    imageSrc: new URL("../../images/tomatoes.jpg", import.meta.url),
    title: "Tomatoes",
  },
  {
    imageSrc: new URL("../../images/peppers.jpg", import.meta.url),
    title: "Peppers",
  },
  {
    imageSrc: new URL("../../images/cucumbers.jpg", import.meta.url),
    title: "Cucumbers",
  },
  {
    imageSrc: new URL("../../images/broccoli.jpg", import.meta.url),
    title: "Broccoli",
  },
  {
    imageSrc: new URL("../../images/onion.jpg", import.meta.url),
    title: "Onion",
  },
  {
    imageSrc: new URL("../../images/bacon.jpg", import.meta.url),
    title: "Bacon",
  },
  {
    imageSrc: new URL("../../images/cream-cheese.jpg", import.meta.url),
    title: "Cream cheese",
  },
  {
    imageSrc: new URL("../../images/sausage.jpg", import.meta.url),
    title: "Sausage",
  },
  {
    imageSrc: new URL("../../images/chicken.jpg", import.meta.url),
    title: "Chicken",
  },
  {
    imageSrc: new URL("../../images/lemons.jpg", import.meta.url),
    title: "Lemons",
  },
  {
    imageSrc: new URL("../../images/ground-meat.jpg", import.meta.url),
    title: "Ground-meat",
  },
  {
    imageSrc: new URL("../../images/beef.jpg", import.meta.url),
    title: "Beef",
  },
  {
    imageSrc: new URL("../../images/potatoes.jpg", import.meta.url),
    title: "Potatoes",
  },
  {
    imageSrc: new URL("../../images/strawberries.jpg", import.meta.url),
    title: "Strawberries",
  },
  {
    imageSrc: new URL("../../images/lettuce.jpg", import.meta.url),
    title: "Lettuce",
  },
  {
    imageSrc: new URL("../../images/pasta.jpg", import.meta.url),
    title: "Pasta",
  },
  {
    imageSrc: new URL("../../images/juice.jpg", import.meta.url),
    title: "Juice",
  },
  {
    imageSrc: new URL("../../images/bread.jpg", import.meta.url),
    title: "Bread",
  },
  {
    imageSrc: new URL("../../images/salami.jpg", import.meta.url),
    title: "Salami",
  },
  {
    imageSrc: new URL("../../images/olives.jpg", import.meta.url),
    title: "Olives",
  },
  {
    imageSrc: new URL("../../images/greek-feta-cheese.jpg", import.meta.url),
    title: "Greek feta cheese",
  },
  {
    imageSrc: new URL("../../images/mushroom.jpg", import.meta.url),
    title: "Mushrooms",
  },
  {
    imageSrc: new URL("../../images/tuna.jpg", import.meta.url),
    title: "Tuna",
  },
  {
    imageSrc: new URL("../../images/spinach.jpg", import.meta.url),
    title: "Spinach",
  },
  {
    imageSrc: new URL("../../images/asparagus.jpg", import.meta.url),
    title: "Asparagus",
  },
  {
    imageSrc: new URL("../../images/raspberries.jpg", import.meta.url),
    title: "Raspberries",
  },
  {
    imageSrc: new URL("../../images/blueberries.jpg", import.meta.url),
    title: "Blueberries",
  },
  {
    imageSrc: new URL("../../images/avocado.jpg", import.meta.url),
    title: "Avocado",
  },
  {
    imageSrc: new URL("../../images/olive-oil.jpg", import.meta.url),
    title: "Olive oil",
  },
  {
    imageSrc: new URL("../../images/flour.jpg", import.meta.url),
    title: "Flour",
  },
  {
    imageSrc: new URL("../../images/corn.jpg", import.meta.url),
    title: "Corn",
  },
  {
    imageSrc: new URL("../../images/chocolate.jpg", import.meta.url),
    title: "Chocolate",
  },
  {
    imageSrc: new URL("../../images/banana.jpg", import.meta.url),
    title: "Banana",
  },
  {
    imageSrc: new URL("../../images/carrot.jpg", import.meta.url),
    title: "Carrot",
  },
  {
    imageSrc: new URL("../../images/chives.jpg", import.meta.url),
    title: "Chives",
  },
  {
    imageSrc: new URL("../../images/peas.jpg", import.meta.url),
    title: "Green peas",
  },
  {
    imageSrc: new URL("../../images/water.jpg", import.meta.url),
    title: "Water",
  },
  {
    imageSrc: new URL("../../images/broad-beans.jpg", import.meta.url),
    title: "Broad beans",
  },
  {
    imageSrc: new URL("../../images/orange.jpg", import.meta.url),
    title: "Orange",
  },
  {
    imageSrc: new URL("../../images/garlic.jpg", import.meta.url),
    title: "Garlic",
  },
  {
    imageSrc: new URL("../../images/peanut-butter.jpg", import.meta.url),
    title: "Peanut butter",
  },
  {
    imageSrc: new URL("../../images/hazelnuts.jpg", import.meta.url),
    title: "Hazelnuts",
  },
  {
    imageSrc: new URL("../../images/walnuts.jpg", import.meta.url),
    title: "Walnuts",
  },
  {
    imageSrc: new URL("../../images/buckwheat.jpg", import.meta.url),
    title: "Buckwheat groats",
  },
  {
    imageSrc: new URL("../../images/rice.jpg", import.meta.url),
    title: "Rice",
  },
  {
    imageSrc: new URL("../../images/cranberry.jpg", import.meta.url),
    title: "Cranberry",
  },
  {
    imageSrc: new URL("../../images/zucchini.jpg", import.meta.url),
    title: "Zucchini",
  },
  {
    imageSrc: new URL("../../images/aubergine.jpg", import.meta.url),
    title: "Aubergine",
  },
  {
    imageSrc: new URL("../../images/salt.jpg", import.meta.url),
    title: "Salt",
  },
  {
    imageSrc: new URL("../../images/pepper.jpg", import.meta.url),
    title: "Pepper",
  },
  {
    imageSrc: new URL("../../images/sugar.jpg", import.meta.url),
    title: "Sugar",
  },
];

class Ingredients {
  constructor() {
    this.ref = document.querySelector(".ingredientsGrid");
  }

  addIngredient() {
    const random = Math.floor(Math.random() * listOfIngredients.length);
    const itemOfIngredients = document.createElement("div");
    itemOfIngredients.classList.add("image");
    itemOfIngredients.innerHTML = `
        <img src='${listOfIngredients[random].imageSrc}' alt="${listOfIngredients[random].title}" />
        <span>${listOfIngredients[random].title}</span>
        `;
    this.ref.appendChild(itemOfIngredients);
    listOfIngredients.splice(random, 1);
  }

  render() {
    let breakPoint = window.matchMedia("(max-width: 480px)");
    const numberOfElements = breakPoint.matches ? 4 : 9;

    for (let i = 0; i < numberOfElements; i++) {
      this.addIngredient();
    }
  }
}

export default Ingredients;
