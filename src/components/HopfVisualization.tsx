import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Card } from '@/components/ui/card'

interface HopfVisualizationProps {
  totalSpace: number
  baseSpace: number
  fiberSpace: number
}

export function HopfVisualization({ totalSpace, baseSpace, fiberSpace }: HopfVisualizationProps) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('oklch(0.12 0.02 270)')
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    canvasRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const totalSpaceColor = new THREE.Color('oklch(0.35 0.15 270)')
    const fiberSpaceColor = new THREE.Color('oklch(0.65 0.18 210)')
    const baseSpaceColor = new THREE.Color('oklch(0.72 0.15 60)')

    const totalSphereGeometry = new THREE.SphereGeometry(2, 64, 64)
    const totalSphereMaterial = new THREE.MeshPhongMaterial({
      color: totalSpaceColor,
      transparent: true,
      opacity: 0.3,
      wireframe: false
    })
    const totalSphere = new THREE.Mesh(totalSphereGeometry, totalSphereMaterial)
    scene.add(totalSphere)

    const baseSphereGeometry = new THREE.SphereGeometry(1.5, 32, 32)
    const baseSphereMaterial = new THREE.MeshPhongMaterial({
      color: baseSpaceColor,
      transparent: true,
      opacity: 0.5,
      wireframe: true
    })
    const baseSphere = new THREE.Mesh(baseSphereGeometry, baseSphereMaterial)
    scene.add(baseSphere)

    const fiberCount = Math.min(20, fiberSpace + 3)
    const fibers: THREE.Line[] = []
    
    for (let i = 0; i < fiberCount; i++) {
      const phi = (i / fiberCount) * Math.PI * 2
      const points: THREE.Vector3[] = []
      
      for (let t = 0; t <= 1; t += 0.05) {
        const theta = t * Math.PI * 2
        const radius = 1.8
        const x = radius * Math.cos(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.cos(theta)
        const z = radius * Math.sin(theta)
        points.push(new THREE.Vector3(x, y, z))
      }
      
      const fiberGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const fiberMaterial = new THREE.LineBasicMaterial({
        color: fiberSpaceColor,
        transparent: true,
        opacity: 0.6,
        linewidth: 2
      })
      const fiber = new THREE.Line(fiberGeometry, fiberMaterial)
      fibers.push(fiber)
      scene.add(fiber)
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0xffffff, 1)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x8844ff, 0.5)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.005

      totalSphere.rotation.y = time * 0.5
      totalSphere.rotation.x = time * 0.3

      baseSphere.rotation.y = time * 0.7
      baseSphere.rotation.x = time * 0.4

      fibers.forEach((fiber, idx) => {
        fiber.rotation.y = time * 0.6 + (idx * 0.1)
        fiber.rotation.z = time * 0.3
      })

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current || !renderer || !camera) return
      
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      
      if (rendererRef.current && canvasRef.current) {
        canvasRef.current.removeChild(rendererRef.current.domElement)
      }
      
      rendererRef.current?.dispose()
    }
  }, [totalSpace, baseSpace, fiberSpace])

  return (
    <Card className="w-full h-[500px] overflow-hidden bg-card/50 backdrop-blur">
      <div ref={canvasRef} className="w-full h-full" />
    </Card>
  )
}
