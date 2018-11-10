var $c= 0;
var $arrayEvents = [
  {
    'title': 'Presentación',
    'h': 1,
    'm': 0,
    's': 0
  },
  {
    'title': 'Instalación de entorno',
    'h': 0,
    'm': 30,
    's': 0
  },
  {
    'title': 'Taller',
    'h': 1,
    'm': 45,
    's': 0
  },
  {
    'title': 'Reto',
    'h': 2,
    'm': 15,
    's': 0
  },
  {
    'title': 'Presentación de Reto',
    'h': 1,
    'm': 0,
    's': 0
  },
  {
    'title': 'Deliberación de Jueces/Lunch',
    'h': 0,
    'm': 30,
    's': 0
  },
  {
    'title': 'Resultados',
    'h': 0,
    'm': 10,
    's': 0
  },
  {
    'title': 'Entrevistas',
    'h': 0,
    'm': 50,
    's': 0
  }
]

// window.onload = () => {
//
// }

function startApp(h, m, s) {
  console.log('=> start agenda');
  let obj = new Chronometer(h, m, s);
  $achr = startChronometer(obj);
}

function renderTitles() {
  $arrayEvents.forEach(($e,$i) => {
    let $n = document.createElement('p');
        $n.id = `e${$i}`;
        $n.classList.add('a-item');
        $n.innerHTML = $e.title;
    document.getElementById('agenda').appendChild($n);
  });
}

function startChronometer(obj) {
  itemOn();
  $ah.innerHTML = format(obj.h);
  $am.innerHTML = format(obj.m);
  $as.innerHTML = format(obj.s);
  return setInterval(() => {
    if (obj.s > 0) {
      renderS(obj)
    } else if (obj.s == 0 && obj.m > 0 && (obj.h > 0 || obj.h == 0)) {
      renderM(obj);
    } else if (obj.s == 0 && obj.m == 0 && obj.h > 0) {
      renderH(obj);
    } else if (obj.s == 0 && obj.m == 0 && obj.h == 0) {
      clearInterval($achr);
      $achr = null;
      restarChronometer();
    }
  },1000)
}

function renderS(obj) {
  obj.subtractS();
  $as.innerHTML = format(obj.s);
  // console.log(obj.h,obj.m,obj.s);
}

function renderM(obj) {
  obj.subtractM();
  obj.s = 59;
  $as.innerHTML = obj.s;
  $am.innerHTML =  format(obj.m);
}

function renderH(obj) {
  obj.subtractH();
  obj.m = 59;
  obj.s = 59;
  $as.innerHTML = obj.s;
  $am.innerHTML = obj.m;
  $ah.innerHTML = format(obj.h);
}

function restarChronometer() {
  itemFinished();
  if ($c == $arrayEvents.length -1) {
    console.log('=> Finish');
  } else {
    $c++
    let $e = $arrayEvents[$c];
    startApp($e.h, $e.m, $e.s);
    console.log(`=> Event: ${$c}`);
  }
}

function itemOn() {
  document
    .getElementById(`e${$c}`)
    .classList.add('item-active');
}

function itemFinished() {
  document
    .getElementById(`e${$c}`)
    .classList.remove('item-active');
  document
    .getElementById(`e${$c}`)
    .innerHTML = `${$arrayEvents[$c].title} <i class="fas fa-check" style="
                      color: #56fdff;
                      font-size: 40px;
                  "></i>`
    // .classList.add('item-finished');
}
