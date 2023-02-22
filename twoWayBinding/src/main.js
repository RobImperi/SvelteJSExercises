import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'two Way Binding Example'
	}
});

export default app;