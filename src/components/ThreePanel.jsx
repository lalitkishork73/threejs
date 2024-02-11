import React, { useRef, useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas });
        const orbit = new OrbitControls(camera, renderer.domElement);
        renderer.setSize(width, height);

        const axisHelper = new THREE.AxesHelper(5)
        scene.add(axisHelper)
        camera.position.set(0, 2, 5)
        orbit.update()
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 'white' });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // camera.position.z = 5;

        function render() {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        render();

        function handleResize() {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>
        <div className='flex justify-center bg-black'>
            <canvas ref={canvasRef} className='h-[600px] w-[1000px] bg-gray-100' />
        </div>
    </>
}

export default ThreePanel;
