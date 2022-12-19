window.addEventListener('DOMContentLoaded', () => {
	const canvas_wrap = document.getElementById('canvas-wrap');
	const canvas = document.createElement('canvas');
	canvas.setAttribute('width', '720');
	canvas.setAttribute('height', '720');
	ctx = canvas.getContext('2d');

	canvas_wrap.appendChild(canvas);
	console.log(ctx);
});

