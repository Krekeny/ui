// import { Cta } from '../components/Cta/Cta';

// // TODO try react-shadow
// // https://www.npmjs.com/package/react-shadow

// // import { Logo } from '../components/Logo/Logo';
// // import { Test } from '../components/Test/Test';
// import * as ReactDOM from 'react-dom';
// import React from 'react';

// // import './style.css';

// // import { StyleSheet } from 'react-native';
// // import { StyleSheet } from 'react-native-web';
// // import { createStyleResolver } from 'react-native-web';
// // console.log('createStyleResolver', createStyleResolver);
// // import { StyleSheetManager } from 'styled-components';

// // TODO webcomponents styling?? styling in storybook inline oder css?

// class ctaWeb extends HTMLElement {
// 	constructor() {
// 		super();
// 		this.content = this.attachShadow({ mode: 'open' }); // Shadow DOM

// 		const content = this.content;

// 		// const styleSlot = this.shadowRoot.querySelector('#react-app-root');

// 		// const root = ReactDOM.render(
// 		// 	<StyleSheetManager target={styleSlot}>
// 		// 		<Cta />
// 		// 	</StyleSheetManager>,
// 		// 	// app
// 		// 	// this.content,
// 		// 	content
// 		// );

// 		// const root = ReactDOM.render(<Cta />);

// 		this.content.append(
// 			'Hello ',
// 			document.createElement('slot') // <slot>-Element
// 			// root
// 		);
// 	}
// }

// customElements.define('krui-cta', ctaWeb);

// TODO check this one out
// https://codesandbox.io/s/render-in-shadow-dom-with-ssr-and-styled-components-54j12?from-embed=&file=/src/index.js
