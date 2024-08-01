const track = document.getElementById("image-track")

window.addEventListener("mousedown", (e) => {
  track.dataset.mouseDownAt = e.clientX
})

window.addEventListener("mouseup", (e) => {
  track.dataset.mouseDownAt = "0"
  track.dataset.prevPercentage = track.dataset.percentage
})

window.addEventListener("mousemove", (e) => {
  if (track.dataset.mouseDownAt === "0") return

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
  const maxDelta = window.innerWidth / 2

  const percentage = (mouseDelta / maxDelta) * -100
  const nextPercentageUnconstrained =
    parseFloat(track.dataset.prevPercentage) + percentage
  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 0),
    -100
  )

  track.dataset.percentage = nextPercentage

  track.style.transform = `translate(${nextPercentage}%, -50%)`
})
