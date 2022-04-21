/**
 * Created by swain on 2018/7/6.
 */

// js动态控制屏幕的基准值
(function (win) {
  var doc = win.document
  var docEl = doc.documentElement
  var tid

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width
    if (width > 540) { // 最大宽度
      // width = 540
    }
    var rem = width / 10 // 将屏幕宽度分成10份， 1份为1rem
    docEl.style.fontSize = rem + 'px'
  }

  win.addEventListener('resize', function () {
    clearTimeout(tid)
    tid = setTimeout(refreshRem, 300)
  }, false)
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)
  refreshRem()
})(window)

function accAdd (arg1, arg2) {
  if (isNaN(arg1)) {
    arg1 = 0
  }
  if (isNaN(arg2)) {
    arg2 = 0
  }
  arg1 = Number(arg1)
  arg2 = Number(arg2)
  var r1, r2, m, c
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  if (c > 0) {
    var cm = Math.pow(10, c)
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''))
      arg2 = Number(arg2.toString().replace('.', '')) * cm
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm
      arg2 = Number(arg2.toString().replace('.', ''))
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''))
    arg2 = Number(arg2.toString().replace('.', ''))
  }
  return (arg1 + arg2) / m
}

/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
function debounce (fn, delay) {
  var timer
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

export {accAdd, debounce}
