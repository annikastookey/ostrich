console.log("Loaded app.js");

class App {
  constructor() {
    console.log("\nConstructing App");

    this.model = new Model(this);
    this.view = new View(this);
    this.controller = new Controller(this);

    this.isRunning = true;

    window.onload = this.initialize.bind(this);
  }
  initialize() {
    console.log("\nInitializing App");

    this.model.initialize();
    this.view.initialize();
    this.controller.initialize();

    window.onresize = this.resize.bind(this);
    this.resize();
  }
  quit() {
    this.isRunning = false;
  }
  resize() {
    console.log("\nResizing App");

    this.model.resize();
    this.view.resize();
    this.controller.resize();
  }
  run() {
    console.log("running");
    if (!this.isRunning) {
      return;
    }
    this.controller.run();
    this.model.run();
    this.view.run();
    requestAnimationFrame(this.run.bind(this));
  }
  start() {
    requestAnimationFrame(this.run.bind(this));
  }
}
