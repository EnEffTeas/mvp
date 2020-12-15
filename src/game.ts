function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
  cube.addComponent(new BoxShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---

const cube = spawnCube(8, 1, 8)

cube.addComponent(
  new OnClick(() => {
    cube.getComponent(Transform).scale.z *= 1.1
    cube.getComponent(Transform).scale.x *= 0.9

    spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  })
)

let avocado = new Entity()
avocado.addComponent(new GLTFShape("models/avocado.gltf"))
avocado.addComponent(
  new Transform({
    position: new Vector3(3, 1, 3),
    scale: new Vector3(10, 10, 10),
  })
)
engine.addEntity(avocado)

let avocado1 = new Entity()
avocado1.addComponent(new GLTFShape("models/avocado.gltf"))
avocado1.addComponent(
  new Transform({
    position: new Vector3(3, 1, 5),
    scale: new Vector3(10, 10, 10),
  })
)
engine.addEntity(avocado1)

let staircase = new Entity()
staircase.addComponent(new GLTFShape("models/model.gltf"))
staircase.addComponent(
  new Transform({
    position: new Vector3(8, 1, 8),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(staircase)