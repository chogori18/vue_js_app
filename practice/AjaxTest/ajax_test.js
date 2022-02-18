var btnLoad = document.querySelector('#load');
//読み込みボタンのクリックイベントハンドラを定義
btnLoad.addEventListener('click', function (event) {
  //【手順１】XMLHttpRequestオブジェクトのインスタンスを生成
  var xmlHttpRequest = new XMLHttpRequest();
  //【手順2】通信状態の変化を監視するイベントハンドラを設定
  xmlHttpRequest.onreadystatechange = function() {
    // レスポンスの受信が正常に完了したとき
    if (this.readyState == 4 && this.status == 200) {
      //受信下データをコンソールに出力する
      console.log(this.readyState, this.response);
    }
};
//「手順３」レスポンスの形式を指定する
xmlHttpRequest.responseType = 'json';
//【手順４】リクエストメソッドと読み込みファイルのパスを指定する
xmlHttpRequest.open('GET', 'product.json');
//【手順５】リクエストを送信する（非同期通信を開始する）
xmlHttpRequest.send();
});
