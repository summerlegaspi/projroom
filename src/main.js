import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f5efeb'); 

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(10, 8, 10);
camera.lookAt(0, 3, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 3.5);
light.position.set(20, 10, 5);
scene.add(light);
scene.add(new THREE.AmbientLight('#A8713A'));

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: '#c8d9e6' }) 
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const wallMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff' }); 

const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
backWall.position.z = -10;
backWall.position.y = 5;
scene.add(backWall);

const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
leftWall.position.x = -10;
leftWall.position.y = 5;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const bedFrame = new THREE.Mesh(
  new THREE.BoxGeometry(5.5, 0.5, 10.5),
  new THREE.MeshStandardMaterial({ color: '#2f4156' }) 
);
bedFrame.position.set(-7, 0.25, -4);
scene.add(bedFrame);

const bedSheet = new THREE.Mesh(
  new THREE.BoxGeometry(5, 0.2, 8),
  new THREE.MeshStandardMaterial({ color: '#2f4158' }) 
);
bedSheet.position.set(-7, 1.2, -3);
scene.add(bedSheet);

const pillow = new THREE.Mesh(
  new THREE.BoxGeometry(3.2, 1.2, 1.8),
  new THREE.MeshStandardMaterial({ color: '#2f4158' }) 
);
pillow.position.set(-7, 1.1, -8);
scene.add(pillow);

const mattress = new THREE.Mesh(
  new THREE.BoxGeometry(5, 0.9, 10),
  new THREE.MeshStandardMaterial({ color: '#f5efeb' })
);
mattress.position.set(-7, 0.65, -4);
scene.add(mattress);

const table = new THREE.Mesh(
  new THREE.BoxGeometry(8, 0.2, 3),
  new THREE.MeshStandardMaterial({ color: '#f5efeb' })
);
table.position.set(-0.5, 1.5, -8.5);
scene.add(table);

const monitor = new THREE.Mesh(
  new THREE.BoxGeometry(2, 1.5, 0.1),
  new THREE.MeshStandardMaterial({ color: '#000000' })
);
monitor.position.set(0, 2.35, -9.5);
scene.add(monitor);

const keyboard = new THREE.Mesh(
  new THREE.BoxGeometry(1.8, 0.1, 1.4),
  new THREE.MeshStandardMaterial({ color: '#f5efeb' })
);
keyboard.position.set(0, 1.6, -8);
scene.add(keyboard);

const keys = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.2, 1.3),
  new THREE.MeshStandardMaterial({ color: '#2f4156' })
);
keys.position.set(0, 1.6, -8);
scene.add(keys);

const lampStand = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.24, 0.8, 30),
  new THREE.MeshStandardMaterial({ color: '#2f4156' }) 
);
lampStand.position.set(-3, 2, -8.3); 
scene.add(lampStand);

const lampShade = new THREE.Mesh(
  new THREE.ConeGeometry(0.8, 1, 16),
  new THREE.MeshStandardMaterial({ color: '#c8d9e6', side: THREE.DoubleSide })
);
lampShade.position.set(-3, 3, -8.3);
scene.add(lampShade);

const chair = new THREE.Mesh(
  new THREE.BoxGeometry(2, 1, 2),
  new THREE.MeshStandardMaterial({ color: '#2f4156' })
);
chair.position.set(0, 0.5, -5.7);
scene.add(chair);

const windowFrame = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 0.1), 
  new THREE.MeshStandardMaterial({ color: '#2f4156' }) 
);
windowFrame.position.set(0, 5, -9.9); 
scene.add(windowFrame);

const windowGlass = new THREE.Mesh(
  new THREE.PlaneGeometry(6.7, 4.6),
  new THREE.MeshStandardMaterial({
    color: '#c8d9e6',
    transparent: true,
    opacity: 0.5,   
    metalness: 0.1,
    roughness: 0.1
  })
);
windowGlass.position.set(0, 5, -9.8); 
scene.add(windowGlass);

const circularCarpet = new THREE.Mesh(
  new THREE.CircleGeometry(6, 100), 
  new THREE.MeshStandardMaterial({
    color: '#f5efeb',  
    side: THREE.DoubleSide
  })
);
circularCarpet.rotation.x = -Math.PI / 2; 
circularCarpet.position.set(0, 0.1, 0);  
scene.add(circularCarpet);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
