var app = new Vue({
  el: '#app',
  data: {
    point: { x: 0, y: 0 }
  },
  created: function () {
    //イベントハンドラを登録
    addEventListener('mousemove', this.mousemoveHandler);
  },
  beforeDestroy: function () {
    //イベントハンドラを解除
    removeEventListener('mousemove', this.mousemoveHandler);
  },
  method: {
    //mousemoveイベントハンドラ
    mousemoveHandler: function ($event) {
      this.point.x = $event.clientX;
      this.point.y = $event.clientY;
    }
  }
});
Vue.config.devtools = true;