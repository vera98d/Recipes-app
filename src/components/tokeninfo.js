class TokenInfo {
  constructor() {
    this.ref = document.querySelector(".tokeninfo");
  }
  render(props) {
    if (props.token) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      this.ref.appendChild(input);
    }
  }
}

export default TokenInfo;
