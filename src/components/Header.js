class Header {
  constructor() {
    this.ref = document.querySelector("header");
  }

  render(props) {
    const img = document.createElement("img");
    img.id = "logo";
    img.src = new URL(
      "../../assets/images/logo.png?as=webp&width=250",
      import.meta.url
    );
    img.alt = "Logo";
    this.ref.appendChild(img);

    const title = document.createElement("h1");
    title.id = "titleText";
    title.textContent = "Choose the ingredients and create a recipe";
    this.ref.appendChild(title);
  }
}

export default Header;
