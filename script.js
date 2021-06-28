

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

 
//faction button selection 

document.getElementById('button4').onclick = function () {
       console.log(this.id + " was clicked")
       userRating = 4;
    document.getElementById('button4').className = 'selected';
    document.getElementById('button5').className = '';
    document.getElementById('button6').className = '';
}
document.getElementById('button5').onclick = function () {
      console.log(this.id + " was clicked")
      userRating = 5;
    document.getElementById('button4').className = '';
    document.getElementById('button5').className = 'selected';
    document.getElementById('button6').className = '';
}
document.getElementById('button6').onclick = function () {
      console.log(this.id + " was clicked")
      userRating = 6;
    document.getElementById('button4').className = '';
    document.getElementById('button5').className = '';
    document.getElementById('button6').className = 'selected';
}

