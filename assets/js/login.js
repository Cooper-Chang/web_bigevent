$(function(){
  // 点击注册按钮
  $('#link_reg').on('click', function(){
    $('.reg-box').show();
    $('.login-box').hide();
  })
  $('#link_login').on('click', function(){
    $('.reg-box').hide();
    $('.login-box').show();
  })

  var form = layui.form;
  
  form.verify({
    username: function(value, item){ //value：表单的值、item：表单的DOM对象
      if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
        return '用户名不能有特殊字符';
      }
      if(/(^\_)|(\__)|(\_+$)/.test(value)){
        return '用户名首尾不能出现下划线\'_\'';
      }
      if(/^\d+\d+\d$/.test(value)){
        return '用户名不能全为数字';
      }
      
      //如果不想自动弹出默认提示框，可以直接返回 true，这时你可以通过其他任意方式提示（v2.5.7 新增）
      if(value === 'xxx'){
        alert('用户名不能为敏感词');
        return true;
      }
    },
    
    //我们既支持上述函数式的方式，也支持下述数组的形式
    //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
    password: [
      /^[\S]{6,12}$/
      ,'密码必须6到12位，且不能出现空格'
    ],
    repwd: function(value){
      // 通过形参拿到的是确认密码框的值
      // 还要获取密码框的值
      var pwd = $('.reg-box [name=password]').val()
      if (pwd !== value){
        return '两次密码不一致'
      }
    }

  }); 

  // 监听注册表单的提交事件
  $('#form_reg').on('submit', function(e){
    e.preventDefault();
    var reg_data = {
      username: $('.reg-box [name=username]').val(),
      password: $('.reg-box [name=password]').val(),
    }
    $.post('/api/reguser',
      reg_data, function(res){
        if (res.status !== 0){
          return  console.log(res.message);
        }
        console.log('注册成功')
        // 跳转到登录界面
        $('#link_login').click()
      }
    )
  })

})