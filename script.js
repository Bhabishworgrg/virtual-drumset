const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const buffers = new Map();

async function loadSound(url, id) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  buffers.set(id, audioBuffer);
}

const ids = ['kick', 'snare', 'hihat', 'open-hihat'];

for (let id of ids) {
	loadSound(`/sounds/${ id }.wav`, id);
}

function play_sound(id) {
	const buffer = buffers.get(id);
	if (buffer) {
		const source = audioContext.createBufferSource();
		source.buffer = buffer;
		source.connect(audioContext.destination);
		source.start(0);
	}
}

const kick_btn = document.getElementById('kick-btn');
const snare_btn = document.getElementById('snare-btn');
const hihat_btn = document.getElementById('hihat-btn');
const open_hihat_btn = document.getElementById('open-hihat-btn');

const sounds = [
	{ id: 'kick', key: 'a', btn: kick_btn },
	{ id: 'snare', key: 's', btn: snare_btn },
	{ id: 'hihat', key: 'd', btn: hihat_btn },
	{ id: 'open-hihat', key: 'f', btn: open_hihat_btn }
];

for (let obj of sounds) {
	obj.btn.addEventListener('click', () => {
		play_sound(obj.id);
	});
}

document.addEventListener('keydown', (event) => {
	for (let obj of sounds) {
		if (event.key === obj.key) {
			play_sound(obj.id);
		}
	}
});
