"use client"

import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Computers = ({ isMobile }) => {
  const [error, setError] = useState(null)
  const computer = useGLTF("/desktop_pc/scene.gltf", undefined, (error) => {
    console.error("Error loading 3D model:", error)
    setError(error)
  })

  if (error) {
    return null // This will trigger the fallback
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75} // Reduced scale for mobile
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Handle mobile detection
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  // Add error boundary
  const handleError = (error) => {
    console.error("Canvas error:", error)
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center bg-primary">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Unable to load 3D view</h2>
          <p className="text-secondary">Please try refreshing the page or using a different device</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[60vh] relative">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: isMobile ? 35 : 25 }}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          alpha: false,
          antialias: true,
        }}
        onError={handleError}
        style={{ background: "#050816" }} // Match primary color
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default ComputersCanvas

