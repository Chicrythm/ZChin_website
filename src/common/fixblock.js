/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-26 11:48:55
 * @LastEditors: yzq
 */



export function rafFix() {
  window.requestAnimationFrame(displayFix)
}

export function displayFix(){
  let blogLink = document.getElementById('blogLink')
  console.log('blogLink',blogLink)
  window.onscroll = function() {
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    console.log(t)
    if(t > 53) {
      blogLink.style.position = 'fixed'
    }
    window.requestAnimationFrame(displayFix)
  }
  console.log('blogLink',blogLink)
}