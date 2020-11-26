/**
 * @name: animate
 * @author: surui
 * @date: 2020-11-23 16:12
 * @description：animate
 * @update: 2020-11-23 16:12
 */
function animate_yunsu(obj,target,callback){
    // 不断点击出现不断添加定时器的bug解决方案 每次调用函数先清除上一次的定时器 只保留本次设置的
    clearInterval(obj.timer);
    // 给obj对象添加timer属性   实现了给不同元素指定不同的定时器
    obj.timer = setInterval(function(){
        if(obj.offsetLeft == target){
            if(callback){
                callback(obj);
            }
            clearInterval(obj.timer);
            timer = null;
        }else{
            obj.style.left  = obj.offsetLeft+5+'px';
        }
    },30);
}


// 缓动效果
function animate(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 取整之后就可以正好到我们target位置
        var step = (target-obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            timer = null;
        }else{
            obj.style.left = obj.offsetLeft + step + 'px';
        }
        if (callback) {
            callback();
        }
    },15)
}
