$(function(){
    var form = layui.form;
    form.val("user_form", {
        'nickname': "大的",
        'username': '123',
        'email': '123@123.com'
    })

    var layer = layui.layer

    form.verify({
        nickname: function(value){
            if(value.length > 6 ){
                return '昵称长度必须在1～6个字符之间'
            }
        }
    })

    // 初始化用户的基本信息
    function initUserInfo(){
        form.val("user_form", {
            'nickname': "大的",
            'username': '123',
            'emial': '123@123.com'
        })

        // $.ajax({
        //     method: 'GET',
        //     url: '/my/userinfo',
        //     //headers 配置用户认证结果
        //     success: function(res){
        //         if(res.status !==0){
        //             return layer.msg('获取用户信息失败！')
        //         }
        //         form.val("user_form", {
        //             'nickname': "大的",
        //             'username': '123',
        //             'emial': '123@123.com'
        //         })
        //     },
        //     error: function(res){
        //         return layer.msg('获取用户信息失败！')
        //     },
        // }) 
    }


    // 重置按钮点击事件
    $("#btnReset").on('click', function(e){
        // 先阻止默认行为
        e.preventDefault();
        form.val("user_form", {
            'nickname': "大的",
            'username': '123',
            'emial': '123@123.com'
        })
    })

    $('.layui-form').on('submit', function(e){
        e.preventDefault();

        window.parent.getUserInfo()
        initUserInfo()
        // $.ajax({
        //     method: 'POST',
        //     url: '/my/userinfo',
        //     data: $(this).serialize(),
        //     //headers 配置用户认证结果
        //     success: function(res){
        //         if(res.status !==0){
        //             return layui.layer.msg('更新用户信息失败！')
        //         }
        //         renderAvatar(res.data);
        //     },
        //     error: function(res){
        //         return layui.layer.msg('更新用户信息失败！')
        //     },
        // })

    })
})