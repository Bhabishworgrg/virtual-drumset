const snare_btn = document.getElementById('snare-btn');
const kick_btn = document.getElementById('kick-btn');
const hihat_btn = document.getElementById('hihat-btn');
const open_hihat_btn = document.getElementById('open-hihat-btn');

const snare_audio = document.getElementById('snare-audio');
const kick_audio = document.getElementById('kick-audio');
const hihat_audio = document.getElementById('hihat-audio');
const open_hihat_audio = document.getElementById('open-hihat-audio');

function play_sound(audio) {
	const clone = audio.cloneNode();
	document.body.appendChild(clone);
	clone.play();
	clone.addEventListener('ended', () => clone.remove());
}

snare_btn.addEventListener('click', () => {
	play_sound(snare_audio);
});

kick_btn.addEventListener('click', () => {
	play_sound(kick_audio);
});

hihat_btn.addEventListener('click', () => {
	play_sound(hihat_audio);
});

open_hihat_btn.addEventListener('click', () => {
	play_sound(open_hihat_audio);
});

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'a':
			play_sound(snare_audio);
			break;
		case 's':
			play_sound(kick_audio);
			break;
		case 'd':
			play_sound(hihat_audio);
			break;
		case 'f':
			play_sound(open_hihat_audio);
			break;
		default:
			break;
	}
});
