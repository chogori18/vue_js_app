//動くモノクラスの定義
var Movable = function (x, y) {
    this.pos = {
        x: x,
        y: y
    };
    this.move = function (x, y) {
        this.pos.x += x;
        this.pos.y += y;
    }
}
//ボールオブジェクトを格納するからの配列を用意する
var ball = [];
//１００個分の繰り返し
for (var i = 0; i <= 100; i++) {
    //ボールオブジェクトのインスタンスを生成する
    ball[i] = new Movable(
        Math.floor(Math.random() * window.innerWidth),
        Math.floor(Math.random() * window.innerHeight)
    );
}
//ボールをブラウザに描画する
for (var i = 0; i <= 100; i++) {
    document.write('<div class="ball" style="top:' + ball[i].pos.y + 'px;left:' + ball[i].pos.x + 'px;">●</div>')
}
