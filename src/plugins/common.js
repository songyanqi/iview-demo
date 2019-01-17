export default {
    install(Vue , options){
        let ts = Vue.prototype
        /**
         * 时间格式化
         * @param date 日期对象|时间戳数字|时间戳字符串
         * @param format 格式化字符串
         * @returns {String}
         * Demo: date.format(new Date(), 'qq-yyyy-MM-dd hh:mm:ss:S');
         */
        ts.format = (date , format )=> { 
            let that = new Date( date )
            let o = {  
                "M+" : that.getMonth()+1,                 //月份  
                "d+" : that.getDate(),                    //日  
                "h+" : that.getHours(),                   //小时  
                "m+" : that.getMinutes(),                 //分  
                "s+" : that.getSeconds(),                 //秒  
                "q+" : Math.floor((that.getMonth()+3)/3), //季度  
                "S"  : that.getMilliseconds()             //毫秒  
            };  
            if(/(y+)/.test(format))  
                format=format.replace(RegExp.$1, (that.getFullYear()+"").substr(4 - RegExp.$1.length));  
            for(var k in o)  
                if(new RegExp("("+ k +")").test(format))  
                    format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
            return format;  
        }

        /** 
         * 时间转化分钟数
         * Demo: this.timeFormat(t)
        */
        ts.timeFormat = (t) => {
            let time = Math.ceil(t);
            if (time < 60) {
                if (time < 10) {
                    time = '0' + parseInt(t)
                }
                return '00:' + time
            } else {
                if (time < 3600) {
                    let minutes = parseInt(time / 60)
                    let seconds = time - minutes * 60
                    if (minutes < 10) {
                    minutes = '0' + minutes
                    }
                    if (seconds < 10) {
                    seconds = '0' + seconds
                    }
                    return minutes + ':' + seconds
                } else {
                    let hours = parseInt(time / 3600)
                    let minutes = parseInt((time - hours * 3600) / 60)
                    let seconds = time - hours * 3600 - minutes * 60
                    if (hours < 10) {
                    hours = '0' + hours
                    }
                    if (minutes < 10) {
                    minutes = '0' + minutes
                    }
                    if (seconds < 10) {
                    seconds = '0' + seconds
                    }
                    return hours + ':' + minutes + ':' + seconds
                }
            }
        }

        /**
         *  去掉内容的标记
         * @param str 内容字符串
         * @returns {String}
         * Demo: this.delHtmlTag(str)
        */
        ts.delHtmlTag = (str) =>{
            let strHtml = str.replace(/<\/?[^>]*>/gim,""); // 去掉所有的html标记
            let result = strHtml.replace(/(^\s+)|(\s+$)/g,""); // 去掉前后空格
            return result.replace(/\s/g,""); // 去除文章中间空格
        }

    }
}