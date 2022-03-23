
let btn1 = document.getElementById("button-1");
let chkbox = document.getElementById("chk");

chkbox.checked = false;

let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");

btn2.disabled = true;
btn3.disabled = true;

let kmspeed = document.getElementById("velocidade_texto");
let rpmspeed = document.getElementById("velocidade_texto_rpm");

function Motor(fabricante, voltagem) {
  this.velocidade = 0;
  this.velocidaderpm = 0;
  this.status = 0;

  this.ligar = function () {
    this.status = 1;
    console.log(this.status);
  }

  this.desligar = function () {
    this.status = 0;
    console.log(this.status);
  }

  this.verificarVelocidade = function () {
    console.log("A velocidade atual em km/h é: ", this.velocidade);
  }
}

function MotorEstendido(fabricante, voltagem) {
  Motor.call(this, fabricante, voltagem);

  this.acelerar = function () {

    if (this.velocidaderpm < 7000) {
      this.velocidade = this.velocidade + 1;
      this.velocidaderpm = this.velocidade + 25.97;
    }

    console.log(this.velocidade);
  }

  this.reduzir = function () {
    if (this.velocidaderpm >= 25.97) {
      this.velocidade = this.velocidade - 1;
      this.velocidaderpm = this.velocidaderpm - 25.97;
    } else if (this.velocidade > 0){
      this.velocidade = this.velocidade - 1;
      this.velocidaderpm = 0;
    }
  }
}

let motor1 = new Motor("Ford", 2000);
let motorEstendido1 = new MotorEstendido("Ford", 2000);

btn1.addEventListener("click", () => {
  if (chkbox.checked == true) {
    motor1.ligar();
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
  } else {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    motor1.desligar();
  }
});

btn2.addEventListener("mousedown", () => {
  motorEstendido1.acelerar();
  kmspeed.textContent = `${motorEstendido1.velocidade} km/h`;
  rpmspeed.textContent = `${motorEstendido1.velocidaderpm} rpm`;
});

btn3.addEventListener("click", () => {
  motorEstendido1.reduzir();
  kmspeed.textContent = `${motorEstendido1.velocidade} km/h`;
  rpmspeed.textContent = `${motorEstendido1.velocidaderpm} rpm`;
});
