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
/** @param {object} res element, index, direction */
function handleStepEnter(res) {
	const { element, index } = res;
	// 1. Fade in current step
	if (!element.classList.contains('is-active')) {
		element.classList.add('is-active');
		console.log(`Active class added to Step ${index + 1}!`);
	}

	// 2. Add Stickyness
	if (!graphic.classList.contains('is-fixed'))
		graphic.classList.add('is-fixed');

	// 3. Update Counter
	counter.innerHTML = 1 + parseInt(counter.innerHTML);

	// if (graphic.classList.contains('is-bottom'))
	// 	graphic.classList.remove('is-bottom');

	// const stepData = step.setAttribute('data-step');
}

function handleStepExit(res) {
	const { element, index, direction } = res;
	console.log(`Exited Step ${index + 1}`);
	// response = { direction }
	// if (!graphic.classList.contains('is-bottom')) {
	// 	graphic.classList.add('is-bottom');
	// 	res.direction === 'down';
	// }
	// if (graphic.classList.contains('is-fixed'))
	// 	graphic.classList.remove('is-fixed');
}
function init() {
	console.log('Ready to start!');
	// 1. Call a resize on load to update width/height/position of elements
	handleResize();
	// 2. Setup the Scrollama Instance
	scroller.setup({
		container: '#scroll',
		graphic: '.scroll__graphic',
		step: '.scroll__text .step',
		offset: 0.5,
	});
	// 3. Bind Scrollama event Handlers
	scroller.onStepEnter(handleStepEnter);
	scroller.onStepExit(handleStepExit);
	window.addEventListener('resize', handleResize);
}

init();
