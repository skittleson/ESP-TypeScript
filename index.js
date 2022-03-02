var on = false;
setInterval(function () {
  on = !on;
  digitalWrite(2, on);
}, 5000);
