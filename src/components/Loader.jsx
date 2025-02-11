import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
  const { progress, errors } = useProgress()

  // Show error if loading fails
  if (errors.length > 0) {
    return (
      <Html
        as="div"
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          Error loading 3D view
        </p>
      </Html>
    )
  }

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  )
}

export default CanvasLoader

