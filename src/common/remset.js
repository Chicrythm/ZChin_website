/*
 * @Description: 
 * @Autor: yzq
 * @Date: 2022-07-27 13:23:27
 * @LastEditors: yzq
 */

export function rafRemSet() {
  window.requestAnimationFrame(remset)
}

export function remset() {
  var setFont = function () {
    var html = document.documentElement
    var width = html.clientWidth
    console.log('width', width)
    var fontSize = width / 80 + 'px'
    html.style.fontSzie = fontSize
  }

  setFont()
  window.onresize = function () {
    window.requestAnimationFrame(setFont)
  }
}