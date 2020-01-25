const listContainer = document.querySelector('.js-ul')
const listItems = listContainer.querySelectorAll('li')
let timer1, timer2
let opCount = 0

const moveTop = () => {
	const listBottom = parseInt(listItems[0].style.bottom)
	for (let i = 0; i < listItems.length; i++) {
		if (listBottom < 0) {
			listItems[i].style.bottom = listBottom + 5 + 'px'
		} else {
			clearInterval(timer1)
		}
	}
}

const fadeObj = () => {
	for (let i = 0; i < listItems.length; i++) {
		if (opCount < 1) {
			listItems[i].style.opacity = opCount
			opCount += 0.01
		} else {
			clearInterval(timer2)
		}
	}
}

const initAnimation = () => {
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].style.opacity = 0
		listItems[i].style.position = 'relative'
		listItems[i].style.bottom = '-200px'
		// listItems[i].style.bottom = `${-100 * (i + 1)}px`
	}
	timer1 = setInterval(moveTop, 10)
	timer2 = setInterval(fadeObj, 10)
}

initAnimation()
