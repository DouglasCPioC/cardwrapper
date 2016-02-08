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
function Card() {
	this.name = 'card';
	this.width = "100px";
	this.height = "100px";
	this.getWidth = getWidth;
	this.setWidth = setWidth;
	this.getHeight = getHeight;
	this.setHeight = setHeight;
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

// Work correctly
function Wrapper() {
	this.div;
	this.width = "300px";
	this.height = "300px";
	this.getWidth = getWidth;
	this.setWidth = setWidth;
	this.getHeight = getHeight;
	this.setHeight = setHeight;
	this.draw = draw;
	this.draw()
}

// Work correctly
var cardCounter = 0;
function addCard(cardObject) {
	this.divCard = document.createElement('div');
	this.divCard.className = cardObject.name;
	this.divCard.id = cardObject.name + '-' + cardCounter;
	$('.card-wrapper')[0].appendChild(this.divCard);
	$('#' + cardObject.name + '-' + cardCounter)[0].style.width = cardObject.getWidth();
	$('#' + cardObject.name + '-' + cardCounter)[0].style.height = cardObject.getHeight();
	$('#' + cardObject.name + '-' + cardCounter)[0].style.background = 'red';
	$('#' + cardObject.name + '-' + cardCounter)[0].style.position = 'fixed';
	$('#' + cardObject.name + '-' + cardCounter)[0].style.top = '50%';
	$('#' + cardObject.name + '-' + cardCounter)[0].style.left = '50%';
	$('#' + cardObject.name + '-' + cardCounter)[0].style.marginTop = '-50px';
	$('#' + cardObject.name + '-' + cardCounter)[0].style.marginLeft = '-50px';
	this.DynamicSpacing();
	cardCounter = cardCounter + 1;
}

function DynamicSpacing() {
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

function ScreenUpdate() {
	$('#card-creator').click(function() {
		screenEngine.addCard(card);
		$('#' + card.name + '-' + (cardCounter - 1) )[0].style.transitionDuration = '2s';
		$('#' + card.name + '-' + (cardCounter - 1) )[0].style.transform = 'rotateY(45deg)';
		$('.card').hover(function() {
			$(this)[0].style.transitionDuration = '2s';
			$(this)[0].style.transform = 'rotateY(0deg)';
			}, function() {
			$(this)[0].style.transitionDuration = '2s';
			$(this)[0].style.transform = 'rotateY(45deg)';
		});
	});
}

function Engine(context, options) {
	this.wrapperObj = context;
	this.optionsObj = options;
	this.addCard = addCard;
	this.DynamicSpacing = DynamicSpacing;
	this.ScreenUpdate = ScreenUpdate;
	ScreenUpdate();
}

// For test
window.onload = function() {
	wrapperObject = new Wrapper();
	screenEngine = new Engine(wrapperObject, {});
	card = new Card();
}