;(function(window){
    var tQuery = function(selector){
        return new tQuery.fn.init(selector)
    }
    tQuery.fn = tQuery.prototype = {
        constructor:tQuery,
        tQyery:'1.0.0',//版本号
        init:function(selector){
            //实现核心函数
            
            //布尔值是假的情况返回空的tQuery对象
            if(!selector){
                return this
            }else if(this.isFunction(selector)){
                document.addEventListener('DOMContentLoaded',function(){
                    selector()
                })
            }
        },
        isFunction:function(str){
            return typeof str === 'function'
        }
    }
    tQuery.fn.init.prototype = tQuery.fn;
    window.tQuery = window.$ = tQuery
})(window);