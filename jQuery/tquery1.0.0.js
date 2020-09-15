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
                //字符串处理
            }else if(tQuery.isString(selector)){
                //处理html代码
                if(tQuery.isHTML(selector)){
                    var tempDOM = document.createElement('div')
                    tempDOM.innerHTML = selector;
                    [].push.apply(this,tempDOM.children);
                    this.length = tempDOM.children.length;
                    //选择器处理
                }else{
                    var doms = document.querySelectorAll(selector);
                    [].push.apply(this, doms);
                    this.length = doms.length;
                    this.selector = selector;
                }
            }
            //处理数组
            else if(tQuery.isArray(selector)){
                [].push.apply(this,selector);
                this.length = selector.length;
            }
            //处理其他情况 比如对象类型
            else{
                this[0] = selector;
                this.length = 1
            }
            return this
        },
        //假数组转真数组
        toArray:function(){
            return [].slice.call(this);
        },
        //获取元素的dom节点
        get:function(num){
            //判断num是不是一个数字
            num = parseInt(num)
            if(!isNaN(num)){//当是一个数字时进行下面的操作
                //正数
                if(num >= 0){
                    return this[num];
                //负数
                }else{
                    return this[this.length + num];
                }
            }else{
                return this.toArray();
            }
        },

    }
    tQuery.extend = function(obj){
        for(var key in obj){
            this[key] = obj[key]
        }
    }
    tQuery.extend({
        trim:function(arg){
            if(tQuery.isString(arg)){
                return arg.replace(/^\s|\s$/g,'')
            }else{
                return arg
            }
        },
        isFunction:function(arg){
            return typeof arg === 'function'  
        },
        isString:function(arg){
            return typeof arg === 'string'
        },
        isHTML:function(arg){
            return arg.charAt(0) == '<' && arg.charAt(arg.length - 1) == '>' && arg.length > 2
        },
        isArray:function(arg){
            return tQuery.isObject(arg) && length in arg
        },
        isObject:function(arg){
            return typeof arg === 'object'
        },
        //遍历
        each:function(arr,fn){
            if(tQuery.isArray(arr)){
                for(var i = 0,len = arr.length;i<len;i++){
                    var res = fn.call(arr[i],i,arr[i]);
                    if(res == false){
                        break;
                    }else if (res == true){
                        continue;
                    }
                }
            }else{//当arr是一个对象时
                for(var key in arr){
                    var res = fn.call(arr[key],i,arr[key])
                    if(res == false){
                        break;
                    }else if (res == true){
                        continue;
                    }
                }
            }
            return arr
        },
        //映射
        map:function(arr,fn){
            
        }
    })
    
    tQuery.fn.init.prototype = tQuery.fn;
    window.tQuery = window.$ = tQuery
})(window);