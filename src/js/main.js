var chr, $h, $m, $s;
var chrObj = {
  'main': {
    'h': 1,
    'm': 1,
    's': 3
  }
}

function Chronometer(h,m,s) {
  this.h = h;
  this.m = m;
  this.s = s;
  this.subtractH = () => this.h--,
  this.subtractM = () => this.m--,
  this.subtractS = () => this.s--
}

function startApp() {
  let obj = new Chronometer(chrObj.main.h, chrObj.main.m, chrObj.main.s);
  chr = startChronometer(obj);
}

function startChronometer(obj) {
  $h.innerHTML = format(obj.h);
  $m.innerHTML = format(obj.m);
  $s.innerHTML = format(obj.s);
  return setInterval(() => {
    if (obj.s > 0) {
      renderS(obj)
    } else if (obj.s == 0 && obj.m > 0 && (obj.h > 0 || obj.h == 0)) {
      renderM(obj);
    } else if (obj.s == 0 && obj.m == 0 && obj.h > 0) {
      renderH(obj);
    } else if (obj.s == 0 && obj.m == 0 && obj.h == 0) {
      clearInterval(chr);
      renderFinish();
    }
  },1000)
}

function renderS(obj) {
  obj.subtractS();
  $s.innerHTML = format(obj.s);
  console.log(obj.h,obj.m,obj.s);
}

function renderM(obj) {
  obj.subtractM();
  obj.s = 59;
  $s.innerHTML = obj.s;
  $m.innerHTML =  format(obj.m);
  console.log(obj.h,obj.m,obj.s);
}

function renderH(obj) {
  obj.subtractH();
  obj.m = 59;
  obj.s = 59;
  $s.innerHTML = obj.s;
  $m.innerHTML = obj.m;
  $h.innerHTML = format(obj.h);
  console.log(obj.h,obj.m,obj.s);
}

function format(number) {
  return number.toString().length == 1 ? `0${number}` : `${number}`;
}

window.onload = () => {
  console.log('=> start');
  $h = document.getElementById('hours');
  $m = document.getElementById('minuts');
  $s = document.getElementById('seconds');
  startApp()
}
