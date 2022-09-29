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

var scroller = scrollama();

function handleResize() {
	// 1. Update height of step elements for breathing room between steps
	const stepHeight = Math.floor(window.innerHeight * 0.75);
	step.forEach((el) => {
		el.style.height = `${stepHeight}px`;
	});

	// 2. Update height of graphic element
	const bodyWidth = document.querySelector('body').offsetWidth;
	graphic.style.height = `${window.innerHeight}px`;

	// 3. Update width of chart by subtracting from text width
	const chartMargin = 32;
	const textWidth = text.offsetWidth;
	const chartWidth = graphic.offsetWidth - textWidth - chartMargin;
	const chartHeight = Math.floor(window.innerHeight / 2);
	chart.style.width = `${chartWidth}px`;
	chart.style.height = `${chartHeight}px`;

	// 4. Tell Scrollama to update new element dimensions
	scroller.resize();
}
function handleStepEnter(res) {
	console.log(res.classList);
	// res = {el, direction, index}
	// 1. Fade in current step
	if (res.classList.contains('is-active')) {
		(d, i) => i === res.index;
	}
	const stepData = step.attributes('data-step');
}
function handleContainerEnter(res) {
	// response = {direction}
	if (graphic.classList.contains('is-fixed')) return;
	if (graphic.classList.contains('is-bottom'))
		graphic.classList.remove('is-bottom');
}
function handleContainerExit(res) {
	// response = { direction }
	if (graphic.classList.contains('is-bottom')) {
		graphic.classList.add('is-bottom');
		res.direction === 'down';
	}
	if (graphic.classList.contains('is-fixed'))
		graphic.classList.remove('is-fixed');
}
function init() {
	console.log('Ready to start!');
	// 1. Call a resize on load to update width/height/position of elements
	handleResize();
	// 2. Setup the Scrollama Instance
	// 3. Bind Scrollama event Handlers
	scroller.setup({
		container: '#scroll',
		graphic: '.scroll__graphic',
		text: '.scroll__text',
		step: '.scroll__text .step',
		offset: 0.5,
		// debug: true,
	});
	scroller.onStepEnter(handleStepEnter);
	window.addEventListener('resize', handleResize);
}

init();
