

import App from './App.svelte';

const app = new App({
	target: document.getElementById('app'),
	props: {
		// we'll learn about props later
		answer: 42
	}
});