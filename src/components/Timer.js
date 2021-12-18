class Timer {
  constructor() {
    this.ref = document.querySelector("header");
  }
  render() {
    const p = document.createElement("p");
    p.textContent = new Date().toLocaleTimeString();
    p.classList.add("timer");
    this.ref.appendChild(p);
    setInterval(() => {
      p.textContent = new Date().toLocaleTimeString();
    }, 1000);
  }
}

export default Timer;
