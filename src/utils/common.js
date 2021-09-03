export const formatTime = function (date){
    const filterTime = function(m){return m<10?'0'+m:m }
    //date是整数，否则要parseInt转换
    var time = new Date(date);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+filterTime(m)+'-'+filterTime(d)+' '+filterTime(h)+':'+filterTime(mm)
    +':'+filterTime(s);
}