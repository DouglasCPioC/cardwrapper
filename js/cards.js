function Card() {
	var card = {}
	card.name = 'card';
	card.width = '100px';
	card.height = '100px';
	card.getWidth = getWidth;
	card.setWidth = setWidth;
	card.getHeight = getHeight;
	card.setHeight = setHeight;
	card.getName = getName;

	function getWidth() {
		return this.width;
	}

	function setWidth(valeu) {
	this.width = value;
	}

	function getHeight() {
		return this.height;
	}

	function setHeight(value) {
		this.height = value;
	}

	function getName() {
		return this.name;
	}
	return card;
}

function Wrapper() {
	var wrapper = {};
	wrapper.div;
	wrapper.width = '300px';
	wrapper.height = "300px";
	wrapper.getWidth = getWidth;
	wrapper.setWidth = setWidth;
	wrapper.getHeight = getHeight;
	wrapper.setHeight = setHeight;
	wrapper.draw = draw;
	wrapper.draw();

	function getWidth() {
		return this.width;
	}

	function setWidth(valeu) {
		this.width = value;
	}

	function getHeight() {
		return this.height;
	}

	function setHeight(value) {
		this.height = value;
	}

	// Work correctly
	function draw() {
		this.div = document.createElement('div');
		this.div.className = 'card-wrapper';
		this.div.id = 'card-wrapper';
		document.getElementsByTagName('body')[0].appendChild(this.div);
		document.getElementById(this.div.id).style.width = this.getWidth();
		document.getElementById(this.div.id).style.height = this.getHeight();
		document.getElementById(this.div.id).style.background = '#202020';
		document.getElementById(this.div.id).style.top = '50%';
		document.getElementById(this.div.id).style.left = '50%';
		document.getElementById(this.div.id).style.position = 'fixed';
		document.getElementById(this.div.id).style.marginTop = '-150px';
		document.getElementById(this.div.id).style.marginLeft = '-150px';
		document.getElementById(this.div.id).style.perspective = '100px';
	}
	return wrapper;
}

var cardCounter = 0;
function Engine(context, options) {
	var engine = {};
	engine.wrapperObj = context;
	engine.optionsObj = options;
	engine.addCard = addCard;
	engine.dynamicSpacing = dynamicSpacing;
	engine.screenUpdate = screenUpdate;
	screenUpdate();

	function addCard(cardObject) {
		this.divCard = document.createElement('div');
		this.divCard.className = cardObject.getName();
		this.divCard.id = cardObject.getName() + '-' + cardCounter;
		$('.card-wrapper')[0].appendChild(this.divCard);
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.width = cardObject.getWidth();
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.height = cardObject.getHeight();
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.background = 'red';
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.position = 'fixed';
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.top = '50%';
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.left = '50%';
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.marginTop = '-50px';
		$('#' + cardObject.getName() + '-' + cardCounter)[0].style.marginLeft = '-50px';
		this.dynamicSpacing();
		cardCounter = cardCounter + 1;
	}

	function dynamicSpacing() {
		var factor;
		var leftValue;
		for(i = 0; i <= cardCounter; i++) {
			factor = ((150 / (cardCounter + 1)) / 300) * 100;
			if(i < (cardCounter + 1) / 2 && cardCounter != 0) {
				leftValue = 50 - factor * ( (i % (cardCounter == 0 ? 1 : cardCounter) ) / 2);
				$('#card-' + i)[0].style.top = '50%';
				$('#card-' + i)[0].style.left = leftValue + '%';
			}
			else {
				leftValue = 50 + factor * ( (i % (cardCounter == 0 ? 1 : cardCounter) ) / 2);
				$('#card-' + i)[0].style.top = '50%';
				$('#card-' + i)[0].style.left = leftValue + '%';
			}
		}
	}

	function screenUpdate() {
		$('#card-creator').click(function() {
			screenEngine.addCard(card);
			$('#' + card.getName() + '-' + (cardCounter - 1) )[0].style.transitionDuration = '2s';
			$('#' + card.getName() + '-' + (cardCounter - 1) )[0].style.transform = 'rotateY(45deg)';
			$('.card').hover(function() {
				$(this)[0].style.transitionDuration = '2s';
				$(this)[0].style.transform = 'rotateY(0deg)';
				}, function() {
				$(this)[0].style.transitionDuration = '2s';
				$(this)[0].style.transform = 'rotateY(45deg)';
			});
		});
	}
	return engine;
}

window.onload = function() {
	wrapperObject = new Wrapper();
	screenEngine = new Engine(wrapperObject, {});
	card = new Card();
}