class Player {
  constructor(app) {
    this.dimX = 0.125;
    this.dimY = 0.125;
    this.img = document.getElementById("ostrich");
    this.model = app.model;
    this.posX = window.innerWidth / 2;
    this.posY = window.innerHeight / 2;
    this.velY = 0;
    this.view = app.view;
    this.wingflap = document.getElementById("wingflap");
  }
  draw() {
    this.view.context.translate(this.posX, this.posY);
    this.view.context.drawImage(
      this.img,
      (-this.dimX * this.model.minDim) / 2,
      (-this.dimY * this.model.minDim) / 2,
      this.dimX * this.model.minDim,
      this.dimY * this.model.minDim
    );
    this.view.context.translate(-this.posX, -this.posY);
  }
  handleMove(direction) {
    this.velY = 3 * direction;
    if (direction) {
      this.wingflap.currentTime = 0;
      this.wingflap.play();
    }
  }
  resize() {
    this.posX = window.innerWidth / 2;
    this.posY = window.innerHeight / 2;
  }
  update() {
    this.posY += this.velY;
    if (this.posY > window.innerHeight - (this.dimY * this.model.minDim) / 2) {
      this.posY = window.innerHeight - (this.dimY * this.model.minDim) / 2;
    }
    if (this.posY < (this.dimY * this.model.minDim) / 2) {
      this.posY = (this.dimY * this.model.minDim) / 2;
    }
  }
}
