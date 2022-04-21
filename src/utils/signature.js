/**
 * Created by swain on 2019/5/17.
 */
// import wx from 'weixin-js-sdk'
// 获取微信签名
export default {
  install (Vue, options) {
    Vue.prototype.getShare = function () {
      const u = navigator.userAgent
      const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
      $(document).ready(function () {
        $('input').blur(function () {
          if (isIOS) {
            blurAdjust()
          }
        })
        $('select').blur(function () {
          if (isIOS) {
            blurAdjust()
          }
        })
        $('textarea').blur(function () {
          if (isIOS) {
            blurAdjust()
          }
        })
      })
      // 解决苹果不回弹页面
      function blurAdjust () {
        setTimeout(function () {
          if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT' || document.activeElement.tagName === 'TEXTAREA') {
            return
          }
          let result = 'pc'
          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            // 判断iPhone|iPad|iPod|iOS
            result = 'ios'
          } else if (/(Android)/i.test(navigator.userAgent)) {
            // 判断Android
            result = 'android'
          }
          if (result === 'ios') {
            document.activeElement.scrollIntoViewIfNeeded(true)
          }
        }, 100)
      }
    }
  }
}
