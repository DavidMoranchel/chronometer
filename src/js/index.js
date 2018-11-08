// window.onload = () => {
//   startAppMain(6,30,0);
// }

function startAppMain(h,m,s) {
  console.log('=> main start');
  let obj = new Chronometer(h, m, s);
  $mchr = startChronometerMain(obj);
}

function startChronometerMain(obj) {
  $mh.innerHTML = format(obj.h);
  $mm.innerHTML = format(obj.m);
  $ms.innerHTML = format(obj.s);
  return setInterval(() => {
    if (obj.s > 0) {
      renderSM(obj)
    } else if (obj.s == 0 && obj.m > 0 && (obj.h > 0 || obj.h == 0)) {
      renderMM(obj);
    } else if (obj.s == 0 && obj.m == 0 && obj.h > 0) {
      renderHM(obj);
    } else if (obj.s == 0 && obj.m == 0 && obj.h == 0) {
      clearInterval($mchr);
      renderFinishM();
    }
  },1000)
}

function renderSM(obj) {
  obj.subtractS();
  $ms.innerHTML = format(obj.s);
  console.log(obj.h,obj.m,obj.s);
}

function renderMM(obj) {
  obj.subtractM();
  obj.s = 59;
  $ms.innerHTML = obj.s;
  $mm.innerHTML =  format(obj.m);
  console.log(obj.h,obj.m,obj.s);
}

function renderHM(obj) {
  obj.subtractH();
  obj.m = 59;
  obj.s = 59;
  $ms.innerHTML = obj.s;
  $mm.innerHTML = obj.m;
  $mh.innerHTML = format(obj.h);
  console.log(obj.h,obj.m,obj.s);
}
