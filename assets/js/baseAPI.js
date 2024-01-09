// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
  // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
  options.url = 'http://127.0.0.1:8000' + options.url

  // 统一为有权限的接口设置请求头[用url含 /my/ 作为条件]
  if (options.url.indexOf('/my/') !== -1){
    options.headers = {
      Authorization: localStorage.getItem('token') || ''
    }
  }
  // 全局统一挂载 complete回调函数
  options.complete = function(res){
    if(res.responseJSON.status !== 0){
        // 1 强制晴空token， 跳转到登录页面
        localStorage.removeItem('token')
        location.href = "index.html"
    }
  }
})
