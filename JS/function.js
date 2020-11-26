/**
 * @name: function
 * @author: surui
 * @date: 2020-11-23 16:45
 * @description：function
 * @update: 2020-11-23 16:45
 */
// 模态框
function motai_start(login_form,mask) {
    login_form.style.display = 'block';
    mask.style.display = 'block';
}
function motai_end(login_form,mask) {
    login_form.style.display = 'none';
    mask.style.display = 'none';
}
// 复制
function copy() {
    var text =document.getElementById("text").innerText;
    var input = document.createElement('input');
    input.setAttribute('id', 'copyInput');
    input.setAttribute('value', text);
    document.getElementsByTagName('body')[0].appendChild(input);

    document.getElementById('copyInput').select();
    if (document.execCommand('copy')) {
        // return true;
    }
    document.getElementById('copyInput').remove();
    document.getElementsByTagName('body')[0].removeChild(input);
}

// button canvas 动画
function canvas_trasition(color_set) {
    var canvas = {},
        centerX = 0,
        centerY = 0,
        color = '',
        context = {},
        element = {},
        radius = 0,
        containers = document.querySelectorAll('.btn');

    requestAnimFrame = function () {
        return (
            window.requestAnimationFrame       ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    } (),

        init = function () {
            containers = Array.prototype.slice.call(containers);
            for (var i = 0; i < containers.length; i += 1) {
                canvas = document.createElement('canvas');
                canvas.addEventListener('mouseenter', enter, false);
                canvas.addEventListener('mouseout',function () {
                    color = '#fff';
                },false);
                containers[i].appendChild(canvas);
                canvas.style.width ='100%';
                canvas.style.height='100%';
                canvas.width  = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }
        },
        enter = function (e) {
            // color = e.toElement.parentElement.dataset.color;
            color= color_set;
            element = e.toElement;
            context = element.getContext('2d');
            radius = 0;
            centerX = e.offsetX;
            centerY = e.offsetY;
            context.clearRect(0, 0, element.width, element.height);
            draw();
        },
        draw = function () {
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = color;
            context.fill();
            radius += 2;
            if (radius < element.width) {
                requestAnimFrame(draw);
            }
        };
    init();
    for (let i = 0 ; i < containers.length ; i++) {
        containers[i].addEventListener('mouseout', function () {
            for (let i = 0; i < canvas.length; i++) {
                canvas.style.opacity = '0';
            }
        })
    }
}

// button 小白花
animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },500);
};
