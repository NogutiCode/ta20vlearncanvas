import { Box } from './Box';
import { Scene } from './Scene';
import './style.css'
/** @type HTMLCanvasElement */
let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.focus();

let ctx = canvas.getContext('2d');
let scene = new Scene(ctx);
scene.add(new Box(100, 100, 50, 400));

canvas.addEventListener('keydown', evt => {
    scene.keyDown(evt);
});
canvas.addEventListener('keyup', evt => {
  scene.keyUp(evt);
});

let start = new Date().getTime();
let previous, current = 0;
setInterval(() => {
  previous = current;
  current = new Date().getTime() - start;
  let delta = current-previous;
  scene.beforeUpdate();
  scene.update(delta);
  scene.draw();
}, 0);