var app = new Vue({
    el: '#app',
    data: {
      arrival_date: null
    },
    created: function() {
      console.log('hi')
      //初期値を設定する
      this.arrival_date = this.formatDate(new Date());
    },
    methods : {
        //日付を YYYY-MM-DD に整形するメソッド
        formatDate: function(dt) {
            var y = dt.getFullYear();
            var m = ('00' + (dt.getMonth()+1)).slice(-2);
            var d = ('00' + dt.getDate()).slice(-2);
            var result = y + '-' + m + '-' + d;
            return result;
        }
    }
  });
  Vue.config.devtools = true;