let totalSeconds = 2 * 3600 + 5 * 60 + 35;

function pad(n) {
	return String(n).padStart(2, '0');
}

function updateDisplay() {
	let h = Math.floor(totalSeconds / 3600);
	let m = Math.floor((totalSeconds % 3600) / 60);
	let s = totalSeconds % 60;
	document.getElementById('timer').textContent = pad(h) + ' : ' + pad(m) + ' : ' + pad(s);
}

const interval = setInterval(() => {
	if (totalSeconds <= 0) {
		clearInterval(interval);
		return;
	}
	totalSeconds--;
	updateDisplay();
}, 1000);
  