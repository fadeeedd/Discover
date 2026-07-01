function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Fotinha midia do fadedo tocando violão enquanto olha violentamente pra camera",
    )
  }
}

const modal = document.querySelector("#modal")
const profileImg = document.querySelector("#normal_img")

profileImg.addEventListener("click", () => {
  modal.classList.add("show")
})

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show")
  }
})
