export default {
    install(Vue , options){

        let ts = Vue.prototype

        // 时间戳转换  window 方法
        ts.dataFormat = (stemp , fmt )=> { 
            let that = new Date( stemp )
            let o = {  
                "M+" : that.getMonth()+1,                 //月份  
                "d+" : that.getDate(),                    //日  
                "h+" : that.getHours(),                   //小时  
                "m+" : that.getMinutes(),                 //分  
                "s+" : that.getSeconds(),                 //秒  
                "q+" : Math.floor((that.getMonth()+3)/3), //季度  
                "S"  : that.getMilliseconds()             //毫秒  
            };  
            if(/(y+)/.test(fmt))  
                fmt=fmt.replace(RegExp.$1, (that.getFullYear()+"").substr(4 - RegExp.$1.length));  
            for(var k in o)  
                if(new RegExp("("+ k +")").test(fmt))  
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
            return fmt;  
        }

        /**
         * 时间格式化
         * @param date 日期对象|时间戳数字|时间戳字符串
         * @param format 格式化字符串
         * @returns {String}
         * Demo: date.format(new Date(), 'yyyy-MM-dd HH:mm:ss SSS');
         */
        ts.format = (date, format)=>{
            date = Object.prototype.toString.call(date) == '[object String]' ? new Date(parseInt(date)) :
            Object.prototype.toString.call(date) == '[object Number]' ? new Date(date) :
                date || new Date();
            format = Object.prototype.toString.call(format) == '[object String]' ? format : 'yyyy-MM-dd hh:mm:ss SSS';
            var map = {
                'y': date.getFullYear(),
                'M': date.getMonth() + 1,
                'd': date.getDate(),
                'h': date.getHours(),
                'm': date.getMinutes(),
                's': date.getSeconds(),
                'S': date.getMilliseconds()
            };
            for (var key in map) {
            format = format.replace(new RegExp(key + '+'), function (matchValue, index, input) {
                return number.preZero(map[key], matchValue.length);
            });
            }
            return format;
        }
    }
}