class Header {
  constructor() {
    this.ref = document.querySelector("header");
  }

  render(props) {
    this.ref.innerHTML = `
      <img id="logo" src="/src/components/logo.png" />
      <h1 id="titleText">Lorem ipsum dolor sit amet.</h1>
  `;
  }
}

export default Header;
