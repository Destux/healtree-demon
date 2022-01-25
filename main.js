let t1left = anime({
	targets: '#task-1',
	duration: 10000,
	translateX: -1000,
	autoplay: false
})
let t1right = anime({
	targets: '#task-1',
	duration: 10000,
	translateX: 1000,
	autoplay: false
})

document.querySelector('#move-left-one').onclick = t1left.play;
document.querySelector('#move-right-one').onclick = t1right.play;

let t2left = anime({
	targets: '#task-2',
	duration: 10000,
	translateX: -1000,
	autoplay: false
})
let t2right = anime({
	targets: '#task-2',
	duration: 10000,
	translateX: 1000,
	autoplay: false
})

document.querySelector('#move-left-two').onclick = t2left.play;
document.querySelector('#move-right-two').onclick = t2right.play;