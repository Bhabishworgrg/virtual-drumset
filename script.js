const snare_btn = document.getElementById('snare-btn');
const kick_btn = document.getElementById('kick-btn');
const hihat_btn = document.getElementById('hihat-btn');
const open_hihat_btn = document.getElementById('open-hihat-btn');

const snare_audio = document.getElementById('snare-audio');
const kick_audio = document.getElementById('kick-audio');
const hihat_audio = document.getElementById('hihat-audio');
const open_hihat_audio = document.getElementById('open-hihat-audio');

snare_btn.addEventListener('click', () => {
	const snare_clone = snare_audio.cloneNode();
    document.body.appendChild(snare_clone);
    snare_clone.play();
    snare_clone.addEventListener('ended', () => {
        snare_clone.remove();
	});
});

kick_btn.addEventListener('click', () => {
	const kick_clone = kick_audio.cloneNode();
    document.body.appendChild(kick_clone);
    kick_clone.play();
    kick_clone.addEventListener('ended', () => {
        kick_clone.remove();
	});
});
hihat_btn.addEventListener('click', () => {
	const hihat_clone = hihat_audio.cloneNode();
	document.body.appendChild(hihat_clone);
	hihat_clone.play();
	hihat_clone.addEventListener('ended', () => {
		hihat_clone.remove();
	});
});
open_hihat_btn.addEventListener('click', () => {
	const open_hihat_clone = open_hihat_audio.cloneNode();
	document.body.appendChild(open_hihat_clone);
	open_hihat_clone.play();
	open_hihat_clone.addEventListener('ended', () => {
		open_hihat_clone.remove();
	});
});

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'a':
			const snare_clone = snare_audio.cloneNode();
			document.body.appendChild(snare_clone);
			snare_clone.play();
			snare_clone.addEventListener('ended', () => {
				snare_clone.remove();
			});
			break;
		case 's':
			const kick_clone = kick_audio.cloneNode();
			document.body.appendChild(kick_clone);
			kick_clone.play();
			kick_clone.addEventListener('ended', () => {
				kick_clone.remove();
			});
			break;
		case 'd':
			const hihat_clone = hihat_audio.cloneNode();
			document.body.appendChild(hihat_clone);
			hihat_clone.play();
			hihat_clone.addEventListener('ended', () => {
				hihat_clone.remove();
			});
			break;
		case 'f':
			const open_hihat_clone = open_hihat_audio.cloneNode();
			document.body.appendChild(open_hihat_clone);
			open_hihat_clone.play();
			open_hihat_clone.addEventListener('ended', () => {
				open_hihat_clone.remove();
			});
			break;
		default:
			break;
	}
});
