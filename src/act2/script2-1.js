import * as three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new three.Scene()

 
/**
 * Lights
 */
const ambientLight = new three.AmbientLight(0xffffff, 0.5)
ambientLight.color = new three.Color(0xff00ff)
ambientLight.intensity = 0.5
scene.add(ambientLight)

const directionalLight = new three.DirectionalLight(0x00fffc, 0.3)
scene.add(directionalLight)
directionalLight.position.set(0.5, 0.2, 0)
const directionalLightHelper = new three.DirectionalLightHelper(directionalLight, 0.2)
scene.add(directionalLightHelper)

const hemisphereLight = new three.HemisphereLight(0xff0000, 0x0000ff, 0.3)
scene.add(hemisphereLight)
const hemisphereLightHelper = new three.HemisphereLightHelper(hemisphereLight, 0.2)
scene.add(hemisphereLightHelper)

const pointLight = new three.PointLight(0x00ffff, 0.5)
scene.add(pointLight)
const pointLightHelper = new three.PointLightHelper(pointLight, 0.2)
scene.add(pointLightHelper)

const rectAreaLight = new three.RectAreaLight(0x4e00ff, 2, 1, 1)
scene.add(rectAreaLight)
rectAreaLight.position.set(- 1.5, 0, 1.5)
rectAreaLight.lookAt(new three.Vector3())

const spotLight = new three.SpotLight(0x78ff00, 0.5, 10, Math.PI * 0.1, 0.25, 1)
scene.add(spotLight)
scene.add(spotLight.target)
const spotLightHelper = new three.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

// GUI here
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001).name("Ambient intensity")
// useless haha
// const ambientLightDrop =  gui.addFolder('AmbientLight Position')
// ambientLightDrop.add(ambientLight.position, 'x', -5, 5, 0.01)
// ambientLightDrop.add(ambientLight.position, 'y', -5, 5, 0.01)
// ambientLightDrop.add(ambientLight.position, 'z', -5, 5, 0.01)

gui.add(directionalLight, 'intensity').min(0).max(1).step(0.001).name("Directional intensity")
const directionalLightDrop =  gui.addFolder('DirectionalLight Position')
directionalLightDrop.add(directionalLight.position, 'x', -5, 5, 0.01)
directionalLightDrop.add(directionalLight.position, 'y', -5, 5, 0.01)
directionalLightDrop.add(directionalLight.position, 'z', -5, 5, 0.01)
directionalLightDrop.add(directionalLight, 'visible').name("on")
directionalLightDrop.add(directionalLightHelper, 'visible').name("helper")

gui.add(hemisphereLight, 'intensity').min(0).max(1).step(0.001).name("Hemispehere intensity")
const hemisphereLightDrop =  gui.addFolder('HemisphereLight Position')
hemisphereLightDrop.add(hemisphereLight.position, 'x', -5, 5, 0.01)
hemisphereLightDrop.add(hemisphereLight.position, 'y', -5, 5, 0.01)
hemisphereLightDrop.add(hemisphereLight.position, 'z', -5, 5, 0.01)
hemisphereLightDrop.add(hemisphereLight, 'visible').name("on")
hemisphereLightDrop.add(hemisphereLightHelper, 'visible').name("helper")

gui.add(pointLight, 'intensity', 0, 1, 0.001).name("PointLight intensity")
const pointLightDrop =  gui.addFolder('PointLight Position')
pointLightDrop.add(pointLight.position, 'x', -5, 5, 0.01)
pointLightDrop.add(pointLight.position, 'y', -5, 5, 0.01)
pointLightDrop.add(pointLight.position, 'z', -5, 5, 0.01)
pointLightDrop.add(pointLight, 'visible').name("on")
pointLightDrop.add(pointLightHelper, 'visible').name("helper")


gui.add(spotLight, 'intensity', 0, 1, 0.001).name("SpotLight intensity")
const spotLightDrop =  gui.addFolder('spotLight Position')
spotLightDrop.add(spotLight.position, 'x', -5, 5, 0.01)
spotLightDrop.add(spotLight.position, 'y', -5, 5, 0.01)
spotLightDrop.add(spotLight.position, 'z', -5, 5, 0.01)
const spotLightTargetDrop =  gui.addFolder('spotlight target Position')
spotLightTargetDrop.add(spotLight.target.position, 'x', -5, 5, 0.01)
spotLightTargetDrop.add(spotLight.target.position, 'y', -5, 5, 0.01)
spotLightTargetDrop.add(spotLight.target.position, 'z', -5, 5, 0.01)
spotLightDrop.add(spotLight, 'visible').name("on")
spotLightDrop.add(spotLightHelper, 'visible').name("helper")



// ambientLightDrop.close()
directionalLightDrop.close()
hemisphereLightDrop.close()
pointLightDrop.close()
spotLightDrop.close()
spotLightTargetDrop.close()
/**
 * Objects
 */
// Material
const material = new three.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new three.Mesh(
    new three.SphereGeometry(0.5, 32, 32),
    material
)
sphere.position.x = - 1.5

const cube = new three.Mesh(
    new three.BoxGeometry(0.75, 0.75, 0.75),
    material
)

const torus = new three.Mesh(
    new three.TorusGeometry(0.3, 0.2, 32, 64),
    material
)
torus.position.x = 1.5

const plane = new three.Mesh(
    new three.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(sphere, cube, torus, plane)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})




/**
 * Camera
 */
// Base camera
const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 4
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new three.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new three.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime


    // helpers update
    spotLightHelper.update();
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()