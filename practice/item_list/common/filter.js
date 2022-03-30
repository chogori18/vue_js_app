// 数値を通貨書式「#,###,###」(String型)に変換するフィルター
Vue.filter('number_format', function(val) {
    return val.toLocaleString();
})