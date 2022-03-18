import Cone from '../Elements/cone.js';
import Torus from '../Elements/torus.js';
import Cylinder from '../Elements/cylinder.js';
import { radians, map, distance } from '../helpers.js';
export default class Canvas {

    setup() {
        this.gutter = { size: 4.4};
        this.meshes = [];
        this.grid = { rows: 12, cols: 8 };
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.mouse3D = new THREE.Vector2();
        this.geometries = [
            new Cone(),
            new Torus(),
            new Cylinder(),
        ];

        this.raycaster = new THREE.Raycaster();
    }

    createScene() {
        this.scene = new THREE.Scene();
        const canvas = document.getElementById('canvas')
        if (!canvas) return;
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);


        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        canvas.appendChild(this.renderer.domElement);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1);
        this.camera.position.set(0, 65, 0);
        this.camera.rotation.x = -1.57;

        this.scene.add(this.camera);
    }

    addAmbientLight() {
        const light = new THREE.AmbientLight('#020304', 0.1);

        this.scene.add(light);
    }

    addSpotLight() {
        const ligh = new THREE.SpotLight('#020304', 0.1, 1000);

        ligh.position.set(0, 27, 0);
        ligh.castShadow = true;

        this.scene.add(ligh);
    }

    addRectLight() {
        const light = new THREE.RectAreaLight('#ff6f69', 1, 2000, 2000);

        light.position.set(5, 50, 50);
        light.lookAt(0, 0, 0);

        this.scene.add(light);
    }

    addPointLight(color, position) {
        const light = new THREE.PointLight(color, 1, 1000, 1);

        light.position.set(position.x, position.y, position.z);

        this.scene.add(light);
    }

    addFloor() {
        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.ShadowMaterial({ opacity: .3 });

        this.floor = new THREE.Mesh(geometry, material);
        this.floor.position.y = 0;
        this.floor.receiveShadow = true;
        this.floor.rotateX(- Math.PI / 2);

        this.scene.add(this.floor);
    }

    getRandomGeometry() {
        return this.geometries[Math.floor(Math.random() * Math.floor(this.geometries.length))];
    }

    createGrid() {
        this.groupMesh = new THREE.Object3D();

        const material = new THREE.MeshPhysicalMaterial({
            color: '#020304',
            metalness: .1,
            roughness: .25,
        });

        for (let row = 0; row < this.grid.rows; row++) {
            this.meshes[row] = [];

            for (let index = 0; index < 1; index++) {
                const totalCol = this.getTotalRows(row);

                for (let col = 0; col < totalCol; col++) {
                    const geometry = this.getRandomGeometry();
                    const mesh = this.getMesh(geometry.geom, material);

                    mesh.position.y = 0;
                    mesh.position.x = col + (col * this.gutter.size) + (totalCol === this.grid.cols ? 0 : 2.5);
                    mesh.position.z = row + (row * (index + .25));

                    mesh.rotation.x = geometry.rotationX;
                    mesh.rotation.y = geometry.rotationY;
                    mesh.rotation.z = geometry.rotationZ;

                    mesh.initialRotation = {
                        x: mesh.rotation.x,
                        y: mesh.rotation.y,
                        z: mesh.rotation.z,
                    };

                    this.groupMesh.add(mesh);

                    this.meshes[row][col] = mesh;
                }
            }
        }

        const centerX = -(this.grid.cols / 2) * this.gutter.size  - 1;
        const centerZ = -(this.grid.rows / 2) - 3.5;

        this.groupMesh.position.set(centerX, 0, centerZ);

        this.scene.add(this.groupMesh);
    }

    getTotalRows(col) {
        return (col % 2 === 0 ? this.grid.cols : this.grid.cols - 1);
    }

    getMesh(geometry, material) {
        const mesh = new THREE.Mesh(geometry, material);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        return mesh;
    }

    draw() {
        this.raycaster.setFromCamera(this.mouse3D, this.camera);

        const intersects = this.raycaster.intersectObjects([this.floor]);

        if (intersects.length) {
            const { x, z } = intersects[0].point;

            for (let row = 0; row < this.grid.rows; row++) {
                for (let index = 0; index < 1; index++) {
                    const totalCols = this.getTotalRows(row);

                    for (let col = 0; col < totalCols; col++) {
                        const mesh = this.meshes[row][col];

                        const mouseDistance = distance(x, z,
                            mesh.position.x + this.groupMesh.position.x,
                            mesh.position.z + this.groupMesh.position.z);

                        const y = map(mouseDistance, 7, 0, 0, 6);
                        TweenMax.to(mesh.position, .3, { y: y < 1 ? 1 : y });

                        const scaleFactor = mesh.position.y / 1.75;
                        const scale = scaleFactor < 1 ? 1 : scaleFactor;
                        TweenMax.to(mesh.scale, .3, {
                            ease: Expo.easeOut,
                            x: scale,
                            y: scale,
                            z: scale,
                        });

                        TweenMax.to(mesh.rotation, .7, {
                            ease: Expo.easeOut,
                            x: map(mesh.position.y, -1, 1, radians(270), mesh.initialRotation.x),
                            z: map(mesh.position.y, -1, 1, radians(-90), mesh.initialRotation.z),
                            y: map(mesh.position.y, -1, 1, radians(45), mesh.initialRotation.y),
                        });
                    }
                }
            }
        }
    }

    init() {
        this.setup();

        this.createScene();

        this.createCamera();

        this.createGrid();

        this.addFloor();

        this.addAmbientLight();

        this.addSpotLight();

        this.addRectLight();

        this.addPointLight(0xf2a2ed, { x: 0, y: 10, z: 50 });

        this.addPointLight(0x94b3f2, { x: 20, y: 5, z: 20 });

        this.addPointLight(0x41f2f2, { x: 30, y: 20, z: -50 });

        this.addPointLight(0xEEF279, { x: 100, y: 30, z: -80 });

        this.addPointLight(0xf2eb8d, { x: 200, y: 15, z: 0 });

        this.addPointLight(0xf2eb8d, { x: -20, y: -5, z: 5 });
        this.addPointLight(0xf2eb8d, { x: -10, y: 15, z: 15 });



        this.animate();

        window.addEventListener('resize', this.onResize.bind(this));

        window.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        window.addEventListener('touchmove', this.onTouchMove.bind(this), false);

        this.onMouseMove({ clientX: 0, clientY: 0 });
        this.onTouchMove(event);
    }

    onMouseMove({ clientX, clientY }) {
        this.mouse3D.x = (clientX / this.width) * 2 - 1;
        this.mouse3D.y = -(clientY / this.height) * 2 + 1;
    }

    onTouchMove(event) {
        this.mouse3D.x = (event.changedTouches[0].clientX / this.width) * 2 - 1;
        this.mouse3D.y = -(event.changedTouches[0].clientY / this.height) * 2 + 1;
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
    }

    animate() {
        this.draw();
        if (!this.renderer) return;
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.animate.bind(this));
    }
}