const snare_btn = document.getElementById('snare-btn');
const kick_btn = document.getElementById('kick-btn');
const hihat_btn = document.getElementById('hihat-btn');
const open_hihat_btn = document.getElementById('open-hihat-btn');

const snare_audio = document.getElementById('snare-audio');
const kick_audio = document.getElementById('kick-audio');
const hihat_audio = document.getElementById('hihat-audio');
const open_hihat_audio = document.getElementById('open-hihat-audio');

snare_btn.addEventListener('click', () => {
	snare_audio.play();
});

kick_btn.addEventListener('click', () => {
	kick_audio.play();
});
hihat_btn.addEventListener('click', () => {
	hihat_audio.play();
});
open_hihat_btn.addEventListener('click', () => {
	open_hihat_audio.play();
});

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'a':
			snare_audio.play();
			break;
		case 's':
			kick_audio.play();
			break;
		case 'd':
			hihat_audio.play();
			break;
		case 'f':
			open_hihat_audio.play();
			break;
		default:
			break;
	}
});
