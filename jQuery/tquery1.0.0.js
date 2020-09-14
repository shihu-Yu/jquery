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
            }
            if(tQuery.isFunction(selector)){
                this[0] = document
                this.length = 1
                document.addEventListener('DOMContentLoaded',function(){
                    selector()
                   
                })
                return this
            }else if(tQuery.isString(selector)){
                console.log('str...')
            }
        }  
    }
    tQuery.extend = function(obj){
        for(var key in obj){
            this[key] = obj[key]
        }
    }
    tQuery.extend({
        isFunction:function(arg){
            return typeof arg === 'function'  
        },
        isString:function(arg){
            return typeof arg === 'string'
        }
    })
    
    tQuery.fn.init.prototype = tQuery.fn;
    window.tQuery = window.$ = tQuery
})(window);