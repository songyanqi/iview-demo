import Vue from 'vue'
// 注册
Vue.filter('timeday', function (second) {
    var s = second % 60, m = Math.floor(second / 60) % 60,
        h = Math.floor(second / 60 / 60) % 24,
        d = Math.floor(second / 60 / 60 / 24);
        var str = '';
        if (d) {
            str = "剩 " + d + " 天" ;
        } else {
            str = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
        }
        return str;
    // 返回处理后的值
})
  
// getter，返回已注册的过滤器

//过滤器
Vue.filter('timemmss', function(value) {
    var newDate = new Date(value);
    Date.prototype.format = function(format) {
      var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
      };
      if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1
            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
      }
      return format;
    };
    return newDate.format("yyyy-MM-dd hh:mm")
  });