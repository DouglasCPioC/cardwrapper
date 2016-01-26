var cardCounter = 0;
var cardCounterOld = 0
window.onload = function(){ 
  document.getElementById('card-creator').onclick = function() {
    var divCard = document.createElement('div');
		divCard.className = 'card';
		divCard.id = 'card-' + cardCounter;
		document.getElementsByClassName('card-wrapper')[0].appendChild(divCard);
		document.getElementById('card-' + cardCounterOld).style.left = '50%';
		document.getElementById('card-' + cardCounterOld).style.top = '50%';
		cardCounterOld = cardCounter;
		cardCounter = cardCounter + 1;
	};
};