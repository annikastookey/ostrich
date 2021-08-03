console.log("Loaded model.js");
const NUM_MISSILES = 6;

class Model {
  constructor(app) {
    console.log("  Constructing Model");
    this.app = app;
    this.minDim = undefined;
    this.player = undefined;
    this.missiles = [];
    this.sadtrombone = document.getElementById("sadtrombone");
    this.missilehit = document.getElementById("missilehit");
  }
  handleMove(direction) {
    this.player.handleMove(direction);
  }
  initialize() {
    console.log("  Initializing Model");
    this.player = new Player(this.app);
    for (let i = 0; i < NUM_MISSILES; i++) {
      this.missiles.push(new Missile());
    }
  }
  performCollision(missile) {
    let that = this;
    if (
      this.player.posX + (0.75 * (this.player.dimX * this.minDim)) / 2 >
        missile.posX - (0.75 * missile.dimX) / 2 &&
      missile.posX + (0.75 * missile.dimX) / 2 >
        this.player.posX - (0.75 * (this.player.dimX * this.minDim)) / 2 &&
      this.player.posY + (0.75 * (this.player.dimY * this.minDim)) / 2 >
        missile.posY - (0.75 * missile.dimY) / 2 &&
      missile.posY + (0.75 * missile.dimY) / 2 >
        this.player.posY - (0.75 * (this.player.dimY * this.minDim)) / 2
    ) {
      for (let i = 0; i < this.missiles.length; i++) {
        this.missiles[i].whistle.pause();
      }
      this.missilehit.play();
      this.app.isRunning = false;
      setTimeout(function () {
        console.log(document.getElementById("youlostostrich"));
        document.getElementById("youlostostrich").style.display = "block";
        that.sadtrombone.play();
      }, 1000);
    }
  }
  resize() {
    console.log("  Resizing Model");
    this.minDim = Math.min(window.innerWidth, window.innerHeight);
    this.player.resize();
    //TO DO loop through, call resize on all missiles
  }
  run() {
    this.player.update();
    for (let i = 0; i < this.missiles.length; i++) {
      this.missiles[i].update();
    }
    //num_missiles not defined... where do i define it?
    for (let i = 0; i < this.missiles.length; i++) {
      this.performCollision(this.missiles[i]);
    }
    //TO DO insert for loop for update missiles
    //TO DO check for collisions
  }
}
