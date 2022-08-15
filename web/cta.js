import { Cta, StyleOptions } from '../components/Cta/Cta';
// import { Logo } from '../components/Logo/Logo';
// import { Test } from '../components/Test/Test';
import * as ReactDOM from 'react-dom';
import React from 'react';
// import { StyleSheet } from 'react-native';
// import { StyleSheet } from 'react-native-web';
// import { createStyleResolver } from 'react-native-web';
// console.log('createStyleResolver', createStyleResolver);
import { StyleSheetManager } from 'styled-components';

// TODO webcomponents styling?? styling in storybook inline oder css?

class ctaWeb extends HTMLElement {
	connectedCallback() {
		const mountPoint = document.createElement('span');
		const slot = document.createElement('div');

		slot.id = 'react-app-root';

		mountPoint.appendChild(slot);

		const app = document.createElement('div');

		app.id = 'react-app-slot';

		slot.appendChild(app);

		this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

		const styleSlot = this.shadowRoot.querySelector('#react-app-root');

		const name = this.getAttribute('name');
		const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
		const root = ReactDOM.render(
			<StyleSheetManager target={styleSlot}>
				<Cta />
			</StyleSheetManager>,
			app
		);
		// const root = ReactDOM.render(<Logo />, mountPoint);
		// const root = ReactDOM.render(<Test />, mountPoint);
	}
}

customElements.define('krui-cta', ctaWeb);
