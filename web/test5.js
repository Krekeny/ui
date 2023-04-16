import { Cta } from '../components/Cta/Cta';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { StyleSheetManager } from 'styled-components';
import styled from 'styled-components';
import { StyleSheet, View } from 'react-native-web';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: 'violet',
	},
	text: { color: 'black' },
});

class ctaWeb extends HTMLElement {
	constructor() {
		super();

		// this.addEventListener('click', this.handleClick);
	}

	get myFunction() {
		return this._myFunction;
	}

	set myFunction(value) {
		console.log(
			'🚀 ~ file: test5.js:19 ~ ctaWeb ~ setmyFunction ~ value:',
			value
		);
		this._myFunction = value;
	}

	handleClick = () => {
		// Call the function passed as a property
		if (typeof this.myFunction === 'function') {
			this.myFunction();
		}
	};

	connectedCallback() {
		const mountPoint = document.createElement('div');

		mountPoint.id = 'react-app-root';

		const app = document.createElement('div');

		app.id = 'react-app-slot';

		mountPoint.appendChild(app);

		const shadow = this.attachShadow({ mode: 'open' });

		shadow.appendChild(mountPoint);

		// shadow.append = `
		//   <style>div { background-color: red; }</style>
		// `;

		const styleSlot = this.shadowRoot.querySelector('#react-app-root');

		const text = this.getAttribute('text');
		const onPress = this.getAttribute('on-press');
		console.log(
			'🚀 ~ file: test5.js:29 ~ ctaWeb ~ connectedCallback ~ onPress:',
			onPress
		);

		console.log(
			'🚀 ~ file: test5.js:48 ~ ctaWeb ~ connectedCallback ~ onPress:',
			typeof onPress
		);

		const StyledCta = styled(Cta)`
			padding: 1em 2em;
			background: violet;
		`;

		const root = ReactDOM.render(
			<StyleSheetManager target={styleSlot}>
				<StyledCta text={text} onPress={this.myFunction} test={styles} />
			</StyleSheetManager>,
			app
		);
	}
}

customElements.define('krui-cta', ctaWeb);
