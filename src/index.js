import '../sass/main.scss';
import { querySelector } from './modules/utilities';
import scrollama from 'scrollama';
if (module.hot) {
	module.hot.accept();
}

const graphic = querySelector('.scroll__graphic'),
	chart = querySelector('.chart'),
	text = querySelector('.scroll__text'),
	step = querySelector('.step', true),
	counter = querySelector('.chart__counter');

var scroller = scrollama();

function handleResize() {
	// 1. Update height of step elements for breathing room between steps
	const stepHeight = Math.floor(window.innerHeight * 0.75);
	step.forEach((el) => {
		el.style.height = `${stepHeight}px`;
	});
	graphic.style.height = `${window.innerHeight}px`;

	const chartMargin = 32;
	const textWidth = text.offsetWidth;
	const chartWidth = graphic.offsetWidth - textWidth - chartMargin;
	// make the height 1/2 of viewport
	const chartHeight = Math.floor(window.innerHeight / 2);

	chart.style.width = `${chartWidth}px`;
	chart.style.height = `${chartHeight}px`;
	scroller.resize();
}
/** @param {object} res element, index, direction */
function handleStepEnter(res) {
	console.log(res);
	const { element, index } = res;
	console.log(`handling step ${index + 1}`);
	// 1. Fade in current step
	if (!element.classList.contains('is-active')) {
		element.classList.add('is-active');
	}
}
function handleStepExit(res) {
	const { element, index } = res;
	console.log(`handling exit at step ${index + 1}`);
	if (element.classList.contains('is-active')) {
		// if (index === 0) return;
		element.classList.remove('is-active');
	}
}
function init() {
	console.log('Ready to start!');
	// 1. Call a resize on load to update width/height/position of elements
	handleResize();
	// 2. Setup the Scrollama Instance
	scroller.setup({
		step: '.scroll__text .step',
		offset: 0.5,
	});
	// 3. Bind Scrollama event Handlers
	scroller.onStepEnter(handleStepEnter);
	// scroller.onStepExit(handleStepExit);
	window.addEventListener('resize', handleResize);
}

init();
