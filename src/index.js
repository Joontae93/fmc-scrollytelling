import '../sass/main.scss';
import { querySelector } from './modules/utilities';
import scrollama from 'scrollama';
if (module.hot) {
	module.hot.accept();
}

const container = document.getElementById('scroll'),
	graphic = querySelector('.scroll__graphic'),
	chart = querySelector('.chart'),
	text = querySelector('.scroll__text'),
	step = querySelector('.step', true);
var scoller = scrollama();
function handleResize() {
	// do something
}
function handleStepEnter(res) {
	// do something
}
function handleContainerEnter(res) {
	// do something
}
function handleContainerExit(res) {
	// do something
}
function init() {
	console.log('Ready to start!');
	// do somethings
}

init();
