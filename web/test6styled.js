import React from 'react';
import { render } from 'react-dom';
import { StyleSheetManager } from 'styled-components';
import { Cta2 } from '../components/Cta/Cta2';
import MyComponent from './myComponent';
// import { StyleSheet } from 'react-native-web';

const test = document.createElement('div');

document.body.appendChild(test);

customElements.define(
	'my-component',
	class extends HTMLElement {
		constructor() {
			super();
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

		connectedCallback() {
			this.attachShadow({ mode: 'open' });
			const mountPoint = document.createElement('div');

			mountPoint.id = 'react-app';

			const appRoot = document.createElement('section');

			appRoot.id = 'react-app-root';

			mountPoint.appendChild(appRoot);

			const appSlot = document.createElement('div');

			appSlot.id = 'react-app-slot';

			appRoot.appendChild(appSlot);

			this.shadowRoot.appendChild(mountPoint);

			// const style = document.createElement('style');

			// style.id = 'react-native-stylesheet';

			// style.textContent = `
			//   .text {
			//     color: '#ffffff';
			//     font-weight: bold;
			//   }
			// `;

			// appSlot.parentNode.insertBefore(style, appSlot.nextSibling);

			render(
				<StyleSheetManager target={appRoot}>
					<Cta2 onPress={this.myFunction} />
				</StyleSheetManager>,
				appSlot
			);
		}
	}
);
