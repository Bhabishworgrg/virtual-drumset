const snare_btn = document.getElementById('snare-btn');
const kick_btn = document.getElementById('kick-btn');
const hihat_btn = document.getElementById('hihat-btn');
const open_hihat_btn = document.getElementById('open-hihat-btn');

const snare_audio = document.getElementById('snare-audio');
const kick_audio = document.getElementById('kick-audio');
const hihat_audio = document.getElementById('hihat-audio');
const open_hihat_audio = document.getElementById('open-hihat-audio');

function play_sound(audio) {
	if (audio) {
		const clone = new Audio(audio.src);
		clone.play();
	}
}

const audios = [
	{ audio: kick_audio, key: 'a', btn: kick_btn },
	{ audio: snare_audio, key: 's', btn: snare_btn },
	{ audio: hihat_audio, key: 'd', btn: hihat_btn },
	{ audio: open_hihat_audio, key: 'f', btn: open_hihat_btn }
];

for (let obj of audios) {
	obj.btn.addEventListener('click', () => {
		play_sound(obj.audio);
	});
}

document.addEventListener('keydown', (event) => {
	for (let obj of audios) {
		if (event.key === obj.key) {
			play_sound(obj.audio);
		}
	}
});
