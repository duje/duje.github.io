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

  // orbitControl(0.94, 0.94);
  pointLight(255, 255, 255, locX, locY, 50);
  ambientLight(50);
  rotateZ(frameCount*0.01);
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  specularMaterial(250);
  shininess(60);
  torus(55, 27, 64, 64);
}

function windowResized() {
  resizeCanvas(windowWidth / 2, windowHeight / 2, WEBGL);
}
