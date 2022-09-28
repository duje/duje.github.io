const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
  if(btn.innerText === "\u263D") {
    btn.innerText = "\u263C"
  } else {
    btn.innerText = "\u263D";
  }
});

function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2, WEBGL);
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  pointLight(250, 130, 20, locX, locY, 40);
  ambientLight(5);
  rotateZ(frameCount*0.01);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  specularMaterial(30);
  shininess(20);
  torus(40, 35, 40, 100);
}

function windowResized() {
  resizeCanvas(windowWidth / 2, windowHeight / 2, WEBGL);
}
