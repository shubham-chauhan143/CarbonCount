// Three.js Hero Animation for CarbonCount
const container = document.getElementById('hero-canvas');

let scene, camera, renderer, particles;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create particles (representing CO2 molecules)
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    // Mobile Optimization: Fewer particles on small screens
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 150 : 300;

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
        color: 0x00ffa3,
        size: 0.075, // Increased by 50% (was 0.05)
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Increased velocity by 30% (was 0.001 and 0.0005)
    particles.rotation.y += 0.0013;
    particles.rotation.x += 0.00065;

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
