$(function(){
    getUserInfo()

    $('#btnLogout').on('click', function(e){
        layer.confirm('确定退出登录?', {icon: 3, title:'提示'}, function(index){
            // 去除 token
            localStorage.removeItem('token');
            // 跳到登录页面
            window.location.href = '/login.html'

            layer.close(index);
          });
    })
})

function getUserInfo(){
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        //headers 配置用户认证结果
        success: function(res){
            if(res.status !==0){
                return layui.layer.msg('获取用户信息失败！')
            }
            renderAvatar(res.data);
        },
        error: function(res){
            return layui.layer.msg('获取用户信息失败！')
        },
        

        
    })
}

function renderAvatar(user){
    var name = user.nickname || user.username;
    var email = user.email;
    $('#welcome').html('欢迎&nbsp;' + name);
    // 按需要渲染用户头像
    if(user.user_pic !== null){
        $('.layui-nav-img').attr('src', user.user_pic).show();
        $('.text-avatar').hide();
    }else{
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show();
    }
}

