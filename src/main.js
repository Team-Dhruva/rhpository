import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Deep Thought'
	}
});

export default app;