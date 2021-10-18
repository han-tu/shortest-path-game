// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('black');
// Grid
const gridSize = 9; // samain sama division pls
const gridDivisions = 9;
const gridSquare = gridSize / gridDivisions;
const grid = new THREE.GridHelper(gridSize, gridDivisions);
scene.add(grid);

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.x = 0
camera.position.y = 7
camera.position.z = 7
scene.add(camera)

// Light
const skyColor = 0xB1E1FF;
const groundColor = 0xB97A20;
const intensity = 1;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);

// Renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.listenToKeyEvents(window); // optional

controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.01;

controls.screenSpacePanning = false;


let mainLoop = function () {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
}
console.log('anjay');

mainLoop();
