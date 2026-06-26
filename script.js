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

function openModal() {
  const modal = document.querySelector("#modal")
  if (modal) {
    modal.classList.add("show")
  }
}

function closeModal() {
  const modal = document.querySelector("#modal")
  if (modal) {
    modal.classList.remove("show")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector("#profileImg")
  const modal = document.querySelector("#modal")

  if (profileImg) {
    profileImg.addEventListener("click", openModal)
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal()
      }
    })
  }
})