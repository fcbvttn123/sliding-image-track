import { useState, useEffect, useRef } from "react"

function App() {
  const trackRef = useRef(null)
  const [mouseDownAt, setMouseDownAt] = useState(0)
  const [prevPercentage, setPrevPercentage] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mouseDownAt === 0) return

      const mouseDelta = mouseDownAt - e.clientX
      const maxDelta = window.innerWidth / 2

      const percentage = (mouseDelta / maxDelta) * -100
      const nextPercentageUnconstrained = prevPercentage + percentage
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100
      )

      trackRef.current.dataset.percentage = nextPercentage
      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`
    }

    const handleMouseDown = (e) => {
      setMouseDownAt(e.clientX)
    }

    const handleMouseUp = () => {
      setMouseDownAt(0)
      setPrevPercentage(parseFloat(trackRef.current.dataset.percentage))
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [mouseDownAt, prevPercentage])
  return (
    <div
      id="image-track"
      ref={trackRef}
      data-mouse-down-at="0"
      data-prev-percentage="0"
    >
      <img
        class="image"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        draggable="false"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
        draggable="false"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
        draggable="false"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
      />
    </div>
  )
}

export default App
