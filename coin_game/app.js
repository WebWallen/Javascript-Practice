// Determines if two elements are overlapping

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');

window.addEventListener('keyup', (e) => {
	if (e.key === 'PageDown' || e.key === 'Down') {
		avatar.style.top = moveVertical(avatar, 50);
	}
	else if (e.key === 'ArrowUp' || e.key === 'Up') {
		avatar.style.top = moveVertical(avatar, -50);
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Right') {
		avatar.style.left = moveHorizontal(avatar, -50);
		// Turn player in the correct direction (left)
		avatar.style.transform = 'scale(-1,1)';
	}
	else if (e.key === 'ArrowRight' || e.key === 'Left') {
		avatar.style.left = moveHorizontal(avatar, 50);
		// Turn player so he's facing the right
		avatar.style.transform = 'scale(1, 1)';
	}
})

// Helper function to move horizontally
const moveHorizontal = (element, amount) => {
	// Extract position by removing pixels, converting to integer
	const currLeft = extractPos(element.style.left);
	// Put the pixels back and move the player left/rignt
	element.style.left = `${currLeft + amount}px`;
}

// Create a helper function to move vertically
const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top);
	// Put the pixels back and move the player up/down
	element.style.top = `${currTop + amount}px`;
}

// Obtain the player's current position
const extractPos = (pos) => {
	// If there is not a position, return start as in css
	if (!pos) return 100;
	// Otherwise remove the px + convert to num so we can add movement, and return
	return parseInt(pos.slice(0, -2));
}