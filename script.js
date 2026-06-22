function toggleMode(){
  const html = document.documentElement

  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')){
    img.setAttribute('alt','Fotinha midia do fadedo tocando violão enquanto olha violentamente pra camera')
  }
}