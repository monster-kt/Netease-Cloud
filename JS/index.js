/**
 * @name: index
 * @author: surui
 * @date: 2020-11-22 14:25
 * @description：index
 * @update: 2020-11-22 14:25
 */

window.addEventListener("load" ,function () {
    // canvas_trasition('deepskyblue');

    // 鼠标样式
    var footer = document.querySelector('footer');
    footer.addEventListener('mouseenter',function () {
        this.style.cursor = 'pointer';
    })
    var article = document.querySelector('article');
    article.addEventListener('mouseenter',function () {
        this.style.cursor = 'default';
    })

    // 页脚跳转
    footer.children[3].addEventListener('click',function () {
        location.href = 'https://gitee.com/KSRsusu';
    })

    // logo 跳转官网
    var logo = document.querySelector('.logo');
    logo.addEventListener('click',function () {
        location.href = 'https://music.163.com/';
    })

    logo.addEventListener('mouseenter',function () {
        this.style.cursor = 'pointer';
    })

    // 时间
    var time = document.querySelector('.time');
    function date() {
        let now = new Date();
        let h = now.getHours();
        h = h >= 10 ? h : '0' + h;
        let m = now.getMinutes();
        m = m >= 10 ? m : '0' + m;
        let s = now.getSeconds();
        s = s >= 10 ? s : '0' + s;
        time.innerHTML =  h+ ':' + m + ':' + s;
    }
    date();
    setInterval(date,1000);

    // 登录头像转换
    var login_win  = document.querySelector('.login_win');  // 获取登陆显示窗口
    var img = document.querySelector('img');                // 获取头像
    // login_win.style.display = 'none';

    // 状态
    $(".dropdown-menu li a").click(function() {         //下拉点击事件
        $("#selectMenus").text($(this).text());         //获取文本赋值
        $("#names").val($(this).data("values"));        //获取值放入隐藏输入框内
    })
    // button 鼠标移出
    const btn = document.querySelectorAll('.btn');
    const canvas = document.querySelectorAll('canvas');
    for (let i = 0 ; i < btn.length ; i++) {
        btn[i].addEventListener('mouseout',function () {
            for (let i = 0 ; i < canvas.length ; i++){
                canvas.opacity = 0
            }
        })
        btn[i].addEventListener('click',animateButton,false);
    }


    // 禁止选中文字 与右键菜单
    var span = document.querySelector('span');
    span.addEventListener("contextmeau",function (e) {
        e.preventDefault();
    })

    span.addEventListener("selectstart",function (e) {
        e.preventDefault();
    })

    // 收藏 爱心
    var heart = document.querySelector('section').querySelector('span');
    var flag = true;
    heart.addEventListener('click',function () {
        if(flag){
            heart.style.color = 'deepskyblue';
            flag = false;
        }else {
            heart.style.color = '';
            flag = true;
        }
    })

    heart.addEventListener('mouseenter',function () {
        heart.style.cursor = 'pointer'
    })

    // 评论
    var p = document.querySelector('footer').querySelectorAll('p');


    // 提交新句子  模态框
    var login_form = document.querySelector('.login_form');
    var mask = document.querySelector('.login_hidden');
    var closebtn = login_form.querySelector('span');
    for (let i = 1 ; i<p.length-1 ; i++) {
        p[i].addEventListener('click',function(){
            motai_start(login_form,mask);
        })
    }
    closebtn.addEventListener('click',function () {
        motai_end(login_form,mask);
    })

    // 模态框拖拽
    login_form.addEventListener('mousedown',function(e){
        this.style.cursor = 'move';
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        login_form.addEventListener('mousemove',move)

        function move(e){
            this.style.cursor = 'move';
            this.style.left = e.pageX - x + 'px';
            this.style.top = e.pageY - y + 'px';
        }
        login_form.addEventListener('mouseup',function(){
            this.style.cursor = 'default';
            login_form.removeEventListener('mousemove',move);
        })
    })
})
