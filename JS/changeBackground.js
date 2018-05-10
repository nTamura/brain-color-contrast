$(function(){
  const input = document.querySelector("input");
  const colorBackground = document.querySelector("#color-background")
  input.addEventListener("change", (e) => {
    const rgb = getRgb(e.target.value)
    const result = brain.likely(rgb, network)
    colorBackground.style.background = e.target.value
    colorBackground.style.color = result === 'dark' ? "white" : 'black';
  })
})
