console.log("Loaded controller.js");

class Controller {
  constructor(app) {
    console.log("  Constructing Controller");
    this.app = app;
    this.model = app.model;
  }
  handleKD(event) {
    event.preventDefault();
    switch (event.key) {
      case "Escape":
        this.app.quit();
        break;
      case "ArrowUp":
        this.model.handleMove(-1);
        break;
      case "ArrowDown":
        this.model.handleMove(1);
        break;
    }
  }
  handleKU(event) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        this.model.handleMove(0);
        break;
      case "ArrowDown":
        this.model.handleMove(0);
        break;
    }
  }
  initialize() {
    let that = this;
    console.log("  Initializing Controller");
    window.addEventListener("keydown", this.handleKD.bind(this));
    window.addEventListener("keyup", this.handleKU.bind(this));
    document
      .getElementById("startButton")
      .addEventListener("click", function () {
        setTimeout(function () {
          that.app.start();
        }, 1500);
        this.style.display = "none";
      });
    //TO DO
  }
  resize() {
    console.log("  Resizing Controller");
    //TO DO
  }
  run() {
    //TO DO
  }
}
