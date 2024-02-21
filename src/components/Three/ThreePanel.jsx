import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * @function ThreePanel
 * @description A function that creates a Three.js canvas panel
 * @returns {JSX.Element} A Three.js canvas panel
 */
function ThreePanel() {
    const canvasRef = useRef(null);

    /**
     * @function useEffect
     * @description A React hook that sets up the Three.js scene and renderer
     */
    useEffect(() => {
        const canvas = canvasRef.current;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const aspect = width / height;

        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(100, aspect, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer({ canvas });
        let orbit = new OrbitControls(camera, renderer.domElement);
        renderer.setSize(width, height);

        // Add ambient light to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Add grid helper to the scene
        const gridHelper = new THREE.GridHelper(10, 100);
        scene.add(gridHelper);

        const axisHelper = new THREE.AxesHelper(1);
        scene.add(axisHelper);

        camera.position.set(0, 2, 5);
        orbit.update();
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 'green' });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);



        function render() {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        render();

        function handleResize() {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex justify-center bg-black h-full w-full">
            <canvas ref={canvasRef} className="h-full w-full bg-gray-100" />
        </div>
    );
}

export default ThreePanel;
