// 根据屏幕宽度计算合适的rem，注意；这里的 ww* x 中的x 改变以要同时在vue.config中修改
(function (window, document) {
    function resize () {
      var ww = window.innerWidth
      if (ww > window.screen.width) {
        window.requestAnimationFrame(resize)
      } else {
        if (ww > 750) {
          ww = 750
        }
        document.documentElement.style.fontSize = ww * 88 / 750 + 'px'
      }
    }
  
    resize()
  
    window.addEventListener('resize', resize)
  })(window, document)