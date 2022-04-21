/**
 * Created by swain on 2018/7/6.
 */
// import merge from 'lodash/merge'
// import qs from 'qs'
// 配置API接口地址
var root = process.env.API_ROOT
// var auth = process.env.AUTH_PATH
// 引用axios
var axios = require('axios')
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      // delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios(method, url, params, success, failure, catchErr) {
  /* var defaults = {
    't': new Date().getTime()
  }
  params = merge(defaults, params) */
  if (params) {
    params = filterNull(params)
  }
  // let token = localStorage.getItem('token') || ''
  // let headers = {'Authorization': token}
  axios({
    method: method,
    url:url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    // headers: headers,
    timeout: 60000,
    withCredentials: false
  })
    .then(function (res) {
      let data = res.data || {}
      if (res.status === 200) {
        // 成功
        if (data.code === 40101 || data.code === 401) {
          // token无效，通过refreshToken换取新的token
          // window.location.replace('#/login/index')
          // window.location.replace('')
        } else {
          if (success) {
            success(data)
          }
        }
      } else {
        if (failure) {
          failure(data)
        } else {
          console.log('error: ' + JSON.stringify(data))
        }
      }
    })
    .catch(function (err) {
      if (catchErr) {
        catchErr(err)
      }
      console.log('api error', err)
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure, catchErr) {
    return new Promise((resolve, reject) => {
      apiAxios('GET', url, params, success, failure, catchErr)
    })
  },
  post: function (url, params, success, failure, catchErr) {
    return new Promise((resolve, reject) => {
      apiAxios('POST', url, params, success, failure, catchErr)
    })
  },
  put: function (url, params, success, failure, catchErr) {
    return new Promise((resolve, reject) => {
      apiAxios('PUT', url, params, success, failure, catchErr)
    })
  },
  delete: function (url, params, success, failure, catchErr) {
    return new Promise((resolve, reject) => {
      apiAxios('DELETE', url, params, success, failure, catchErr)
    })
  }
}
