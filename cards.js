var cardCounter = 0;
var cardCounterOld = 0;
window.onload = function(){ 
  document.getElementById('card-creator').onclick = function() {
    var divCard = document.createElement('div');
		divCard.className = 'card';
		divCard.id = 'card-' + cardCounter;
		document.getElementsByClassName('card-wrapper')[0].appendChild(divCard);
		var factor;
		for(i = 0; i <= cardCounter; i++){
			factor = ((150 / (cardCounter + 1)) / 300) * 100;
			var leftValue;
				if(i < (cardCounter + 1) / 2 && cardCounter != 0) {
					leftValue = 50 - factor * (i % (cardCounter) / 2);
					document.getElementById('card-' + i).style.top = '50%';	
					document.getElementById('card-' + i).style.left = leftValue + '%';
				}
				else {
					leftValue = 50 + factor * (i % (cardCounter) / 2);
					document.getElementById('card-' + i).style.top = '50%';	
					document.getElementById('card-' + i).style.left = leftValue + '%';
				}
		}
		cardCounterOld = cardCounter;
		cardCounter = cardCounter + 1;
	};
};