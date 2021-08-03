console.log("Loaded view.js");

class View {
  constructor(app) {
    console.log("  Constructing View");
    this.app = app;
    this.can = undefined;
    this.context = undefined;
    this.model = app.model;
  }
  initialize() {
    console.log("  Initializing View");
    this.can = document.getElementById("can");
    this.context = this.can.getContext("2d");
  }
  resize() {
    console.log("  Resizing View");
    this.can.width = window.innerWidth;
    this.can.height = window.innerHeight;
    //TO DO
  }
  run() {
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.model.player.draw();
    for (let i = 0; i < this.model.missiles.length; i++) {
      this.model.missiles[i].draw();
    }
    //TO DO
  }
}
