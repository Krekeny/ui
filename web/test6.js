import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: '#eaeaea',
	},
	title: {
		marginTop: 16,
		paddingVertical: 8,
		borderWidth: 4,
		borderColor: '#20232a',
		borderRadius: 6,
		backgroundColor: '#61dafb',
		color: '#20232a',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
});

const MyComponent = () => (
	<View style={styles.container}>
		<Text style={styles.title}>React Native</Text>
	</View>
);

// ReactDOM.render(<MyComponent />, document.body); // this works

customElements.define(
	'my-component',
	class extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: 'open' });
			const mountPoint = document.createElement('div');
			this.shadowRoot.appendChild(mountPoint);
			ReactDOM.render(<MyComponent />, mountPoint);
		}
	}
);
