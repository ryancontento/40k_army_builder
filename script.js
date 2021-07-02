
//change which dropdown is visable based on which faction is selected 

function changeImperium() {
  let x = document.getElementById('imperium');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function changeChaos() {
  let x = document.getElementById('chaos');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function changeXenos() {
  let x = document.getElementById('xenos');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

//adding units (only adds names entered manually)
//for HQ
let  list1 = document.getElementById('hqUnit');

function addHqUnit() {
  let  hqUnit = document.getElementById('hqInput').value;
    document.getElementById('hqUnit').innerHTML.value = hqInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(hqUnit));
  list1.appendChild(entry);
}

//for Troops
let  list2 = document.getElementById('troopsUnit');

function addTroopsUnit() {
  let  troopsUnit = document.getElementById('troopsInput').value;
    document.getElementById('troopsUnit').innerHTML.value = troopsInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(troopsUnit));
  list2.appendChild(entry);
}
//for Elites
let  list3 = document.getElementById('elitesUnit');

function addElitesUnit() {
  let  elitesUnit = document.getElementById('elitesInput').value;
    document.getElementById('elitesUnit').innerHTML.value = elitesInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(elitesUnit));
  list3.appendChild(entry);
}

//for Fast Attack
let  list4 = document.getElementById('fastAttackUnit');

function addFastAttackUnit() {
  let  fastAttackUnit = document.getElementById('fastAttackInput').value;
    document.getElementById('fastAttackUnit').innerHTML.value = fastAttackInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(fastAttackUnit));
  list4.appendChild(entry);
}

//for Heavy Support
let  list5 = document.getElementById('heavySupportUnit');

function addHeavySupportUnit() {
  let  heavySupportUnit = document.getElementById('heavySupportInput').value;
    document.getElementById('heavySupportUnit').innerHTML.value = heavySupportInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(heavySupportUnit));
  list5.appendChild(entry);
}

//for Flyer
let  list6 = document.getElementById('flyerUnit');

function addFlyerUnit() {
  let  flyerUnit = document.getElementById('flyerInput').value;
    document.getElementById('flyerUnit').innerHTML.value = flyerInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(flyerUnit));
  list6.appendChild(entry);
}

//for Dedicated Transport
let  list7 = document.getElementById('dedicatedTransportUnit');

function addDedicatedTransportUnit() {
  let  dedicatedTransportUnit = document.getElementById('dedicatedTransportInput').value;
    document.getElementById('dedicatedTransportUnit').innerHTML.value = dedicatedTransportInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(dedicatedTransportUnit));
  list7.appendChild(entry);
}
