var $mchr, $mh, $mm, $ms, $achr, $ah, $am, $as;
$mchr = null;
$mh = document.getElementById('hours');
$mm = document.getElementById('minuts');
$ms = document.getElementById('seconds');

$achr = null;
$ah = document.getElementById('a-hours');
$am = document.getElementById('a-minuts');
$as = document.getElementById('a-seconds');

function Chronometer(h,m,s) {
  this.h = h;
  this.m = m;
  this.s = s;
  this.subtractH = () => this.h--,
  this.subtractM = () => this.m--,
  this.subtractS = () => this.s--
}

function format(number) {
  return number.toString().length == 1 ? `0${number}` : `${number}`;
}

window.onload = () => {
  document.getElementById('start').addEventListener('click',($ev) => {
    startAppMain(6,30,0);
    let $e = $arrayEvents[$c];
    renderTitles();
    startApp($e.h, $e.m, $e.s);
    document.getElementById('start').classList.add('hide');
  });
}
