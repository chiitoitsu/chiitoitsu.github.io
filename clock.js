const clockContainer = document.querySelector('.js-clock')
const clockTitle = clockContainer.querySelector('h1')
const clockButton = clockContainer.querySelector('#js-btn')
let is_clock24 = false

const getTime = () => {
	const date = new Date()
	const hours = date.getHours()
	const mins = date.getMinutes()
	const secs = date.getSeconds()

	if (is_clock24) {
		clockTitle.innerText =
			`${hours < 10 ? `0${hours}` : `${hours}`}:` +
			`${mins < 10 ? `0${mins}` : `${mins}`}:` +
			`${secs < 10 ? `0${secs}` : `${secs}`}`
	} else {
		clockTitle.innerText =
			`${hours < 12 ? `오전 ` : `오후 `}` +
			`${hours < 10 ? `0${hours % 12}` : `${hours % 12}`}:` +
			`${mins < 10 ? `0${mins}` : `${mins}`}:` +
			`${secs < 10 ? `0${secs}` : `${secs}`}`
	}
}

const selectTime = () => {
	is_clock24 = !is_clock24
	clockButton.innerText = `${is_clock24 ? `12시간 표기` : `24시간 표기`}`
	getTime()
}

const initClock = () => {
	getTime()
	setInterval(getTime, 1000)
}

initClock()
