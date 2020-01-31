const listContainer = document.querySelector('.js-ul')
const listItems = listContainer.querySelectorAll('li')
let timer1 = Array(listItems.length)
let timer2 = Array(listItems.length)
let opCount = Array(listItems.length)

const moveTop = (obj, id) => {
	const bottom = parseInt(obj.style.bottom)

	if (bottom < 0) {
		obj.style.bottom = bottom + 2 + 'px'
	} else {
		clearInterval(timer1[id])
	}
}

const fadeObj = (obj, id) => {
	if (opCount[id] < 1) {
		obj.style.opacity = opCount[id]
		opCount[id] += 0.01
	} else {
		clearInterval(timer2[id])
	}
}

const initAnimation = () => {
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].style.opacity = 0
		listItems[i].style.position = 'relative'
		listItems[i].style.bottom = `${-50 * (i + 1)}px`
		timer1[i] = setInterval(() => moveTop(listItems[i], i), 10)
		timer2[i] = setInterval(() => fadeObj(listItems[i], i), 10)
		opCount[i] = 0
	}
}

initAnimation()
