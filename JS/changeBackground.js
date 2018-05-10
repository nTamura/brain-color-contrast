$(function(){
  const input = document.querySelector("input")
  const canvas = document.querySelector("#color-background")
  input.addEventListener("change", (e) => {
    const rgb = getRgb(e.target.value)
    const result = brain.likely(rgb, network)
    canvas.style.background = e.target.value
    canvas.style.color = result === 'dark' ? "white" : 'black';
    // console.log(rgb);
  })
})
