const checkOrientation = () => {
	const isLandscape = window.matchMedia("(orientation: landscape)").matches;
	if (isLandscape) {
		document.getElementById('warning').classList.add('hidden');
		document.getElementById('drums').classList.remove('hidden');
	} else {
		document.getElementById('drums').classList.add('hidden');
		document.getElementById('warning').classList.remove('hidden');
	}
}

checkOrientation();

window.addEventListener('resize', checkOrientation);
