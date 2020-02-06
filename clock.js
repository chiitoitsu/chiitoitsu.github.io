const clockContainer = document.querySelector('.js-clock')
const clockTitle = clockContainer.querySelector('#js-localClock')
const clockTitle2 = clockContainer.querySelector('#js-serverClock')
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
			`${hours % 12 == 0 ? `12` : `${hours % 12}`}:` +
			`${mins < 10 ? `0${mins}` : `${mins}`}:` +
			`${secs < 10 ? `0${secs}` : `${secs}`}`
	}
}

const getServerTime = () => {
	let xmlHttp

	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest() // IE 7.0 이상, 크롬, 파이어폭스 등
	} else if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject('Msxml2.XMLHTTP')
	} else {
		return
	}

	xmlHttp.open('head', window.location.href.toString(), false)
	xmlHttp.setRequestHeader('Content-Type', 'text/html')
	xmlHttp.send(null)

	const date = new Date(xmlHttp.getResponseHeader('Date'))

	const hours = date.getHours()
	const mins = date.getMinutes()
	const secs = date.getSeconds()

	if (is_clock24) {
		clockTitle2.innerText =
			`${hours < 10 ? `0${hours}` : `${hours}`}:` +
			`${mins < 10 ? `0${mins}` : `${mins}`}:` +
			`${secs < 10 ? `0${secs}` : `${secs}`}`
	} else {
		clockTitle2.innerText =
			`${hours < 12 ? `오전 ` : `오후 `}` +
			`${hours % 12 == 0 ? `12` : `${hours % 12}`}:` +
			`${mins < 10 ? `0${mins}` : `${mins}`}:` +
			`${secs < 10 ? `0${secs}` : `${secs}`}`
	}
}

const selectTime = () => {
	is_clock24 = !is_clock24
	clockButton.innerText = `${is_clock24 ? `12시간 표기` : `24시간 표기`}`
	getTime()
	// getServerTime()
}

const initClock = () => {
	getTime()
	// getServerTime()
	setInterval(getTime, 1000)
	// setInterval(getServerTime, 1000)
}

initClock()
