<!DOCTYPE html><html><head><script>
  function startTime() {    
    var today = new Date();    
    var h = today.getHours();    
    var m = today.getMinutes();    
    var s = today.getSeconds();  
    m = checkTime(m);    s = checkTime(s);    document.getElementById('clock').innerHTML =    h + ":" + m + ":" + s;    
    var t = setTimeout(startTime, 500);}function checkTime(i) {    if (i < 10) {i = "0" + i}; // 숫자가 10보다 작을 경우 앞에 0을 붙여줌    return i;}</script></head>
<body onload="startTime()">
<div id="clock"></div>
</body></html>
