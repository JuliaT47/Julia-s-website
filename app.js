// Cube
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth, window.innerHeight);

const lead = document.getElementById("lead");
lead.appendChild(renderer.domElement);

const material = new THREE.MeshStandardMaterial({
  roughness: 0.4,
});

const cube = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), material);
cube.position.set(1, 0, 0);
scene.add(cube);

const ambientLight = new THREE.AmbientLight("#ff5d00", 2);
const directLight = new THREE.DirectionalLight(0xffffff, 0.5);
directLight.position.set(1, 1, 0);

scene.add(ambientLight, directLight);

const render = function () {
  requestAnimationFrame(render);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
