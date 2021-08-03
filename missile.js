class Missile {
  constructor() {
    const NUM_MISSILES = 6;
    this.dimX = 200 + Math.random() * 100;
    this.dimY = this.dimX * 0.2637;
    this.posX = -600;
    this.posY =
      this.dimY / 2 + Math.random() * (window.innerHeight - this.dimY);
    this.velX = 5 + Math.random() * 2;
    this.view = app.view;
    this.whistle = document.getElementById("whistle");
    if (Math.random() < 0.5) {
      this.velX *= -1;
      this.img = document.getElementById("missilel");
    } else {
      this.img = document.getElementById("missiler");
    }
  }
  draw() {
    this.view.context.translate(this.posX, this.posY);
    this.view.context.drawImage(
      this.img,
      -this.dimX / 2,
      -this.dimY / 2,
      this.dimX,
      this.dimY
    );
    this.view.context.translate(-this.posX, -this.posY);
  }
  // performCollision() {
  //   if (
  //     this.player.posX + (0.75 * (this.player.dimX * this.model.minDim)) / 2 >
  //     this.missile.posX - (0.75 * this.missile.dimX) / 2 &&
  //     this.missile.posX + (0.75 * this.missile.dimX) / 2 >
  //     this.player.posX - (0.75 * (this.player.dimX * this.model.minDim)) / 2 &&
  //     this.player.posY + (0.75 * (this.player.dimY * this.model.minDim)) / 2 >
  //     this.posY - (0.75 * missile.dimY) / 2 &&
  //     missile.posY + (0.75 * missile.dimY) / 2 >
  //       model.player.posY - (0.75 * (this..player.dimY * this.model.minDim)) / 2
  //   ) {
  //     //how do i get the whistle to stop playing
  //     whistle.pause();
  //     missilehit.play(); //isn't playing sound
  //     setTimeout(function () {
  //       isRunning = false;
  //       youlostostrich.style.display = "block";
  //       sadtrombone.play();
  //     }, 1000);
  //   }
  // }
  resize() {
    //TO DO
  }
  update() {
    this.posX += this.velX;
    if (this.posX > window.innerWidth + this.dimX) {
      //reset whistle sound?
      this.posX = -this.dimX;
      this.posY =
        this.dimY / 2 + Math.random() * (window.innerHeight - this.dimY);
      this.whistle.currentTime = 0;
      this.whistle.play();
    }
    if (this.posX < 0 - this.dimX) {
      //reset whistle sound?
      this.posX = window.innerWidth + this.dimX;
      this.posY =
        this.dimY / 2 + Math.random() * (window.innerHeight - this.dimY);
      this.whistle.currentTime = 0;
      this.whistle.play();
    }
  }
}
