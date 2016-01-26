var cardCounter = 0;
var cardCounterOld = 0
function cardCreator() { 
	var iDiv = document.createElement('div');
	iDiv.className = 'card';
	iDiv.id = 'card-' + cardCounter;
	document.getElementsByClassName('card-wrapper')[0].appendChild(iDiv);
	document.getElementById('card-' + cardCounterOld).style.left = '50%';
	document.getElementById('card-' + cardCounterOld).style.top = '50%';
	cardCounterOld = cardCounter;
	cardCounter = cardCounter + 1;
}

window.onload = function(){ 
  document.getElementById('card-creator').onclick = function() {
    console.log('Oi');
	};
};
