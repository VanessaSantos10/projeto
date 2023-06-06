function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains('light')) {
  //   html.classList.remove ('light')
  // } else {
  //   html.classList.add ("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir img
  if (html.classList.contains("light")) {
    // se tiver ight mode - img light
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar-dark.png")
    // sem light mode - manter img dark
  }
}
