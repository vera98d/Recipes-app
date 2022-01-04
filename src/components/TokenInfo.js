class TokenInfo {
  constructor(store) {
    this.ref = document.getElementById("tokenInfo");
    this.store = store;
    this.store.onChange((props) => {
      this.render(props);
    });
  }

  render(props) {
    this.ref.innerHTML = "";

    if (!props.token) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute(
        "placeholder",
        "Type Spoonacular token and press enter"
      );
      input.style.width = "100%";
      this.ref.prepend(input);

      input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          this.store.dispatch((props) => ({ ...props, token: input.value }));
          input.remove();
        }
      });
    }
  }
}

export default TokenInfo;
