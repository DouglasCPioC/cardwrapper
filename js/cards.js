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
	document.getElementsByClassName('card-wrapper')[0].appendChild(this.divCard);
	document.getElementById(cardObject.name + '-' + cardCounter).style.width = cardObject.getWidth();
	document.getElementById(cardObject.name + '-' + cardCounter).style.height = cardObject.getHeight();
	document.getElementById(cardObject.name + '-' + cardCounter).style.background = 'red';
	document.getElementById(cardObject.name + '-' + cardCounter).style.position = 'fixed';
	document.getElementById(cardObject.name + '-' + cardCounter).style.top = '50%';
	document.getElementById(cardObject.name + '-' + cardCounter).style.left = '50%';
	document.getElementById(cardObject.name + '-' + cardCounter).style.marginTop = '-50px';
	document.getElementById(cardObject.name + '-' + cardCounter).style.marginLeft = '-50px';
	cardCounter = cardCounter + 1;
}

function Engine(context, options) {
	this.wrapperObj = context;
	this.parametersObj = options;
	this.addCard = addCard;
}

// For test
window.onload = function() {
	wrapperObject = new Wrapper();
	screenEngine = new Engine(wrapperObject, {});
	card = new Card();

	$('#card-creator').click(function() {
		screenEngine.addCard(card);
		$('.card').hover(function() {
			$(this)[0].style.transitionDuration = '2s';
			$(this)[0].style.transform = 'rotateY(45deg)';
			}, function() {
			$(this)[0].style.transitionDuration = '2s';
			$(this)[0].style.transform = 'rotateY(0deg)';
		});
	});

}