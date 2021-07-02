//battle size button selection


var userRating

//battle size button selection  

document.getElementById('button1').onclick = function () {
    console.log(this.id + " was clicked")
    userRating = 1;
    document.getElementById('button1').className = 'selected';
    document.getElementById('button2').className = '';
    document.getElementById('button3').className = '';
}
document.getElementById('button2').onclick = function () {
    console.log(this.id + " was clicked")
    userRating = 2;
    document.getElementById('button1').className = '';
    document.getElementById('button2').className = 'selected';
    document.getElementById('button3').className = '';
}
document.getElementById('button3').onclick = function () {
    console.log(this.id + " was clicked")
    userRating = 3;
    document.getElementById('button1').className = '';
    document.getElementById('button2').className = '';
    document.getElementById('button3').className = 'selected';
}

 

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

let  list = document.getElementById('hqUnit');

function addHqUnit() {
  let  hqUnit = document.getElementById('hqInput').value;
    document.getElementById('hqUnit').innerHTML.value = hqInput;
  let  entry = document.createElement('li');
  entry.appendChild(document.createTextNode(hqUnit));
  list.appendChild(entry);
}

