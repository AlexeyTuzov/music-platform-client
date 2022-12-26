const timeFormat = (time: number): string => {
	let timeLeft: number;

	let hours = Math.floor(time / 3600);
	let hoursStr = hours.toString();
	timeLeft = time - hours * 3600;

	let min = Math.floor(timeLeft / 60);
	let minStr = min.toString();
	timeLeft -= min * 60;
	if (minStr.length === 1) {
		minStr = `0${minStr}`;
	}

	let sec = Math.ceil(timeLeft);
	let secStr = sec.toString();
	if (secStr.length === 1) {
		secStr = `0${secStr}`;
	}

	return `${hoursStr}:${minStr}:${secStr}`;
};

export default timeFormat;
