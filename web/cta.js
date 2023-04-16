import { Cta } from '../components/Cta/Cta';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { StyleSheetManager } from 'styled-components';
import styled from 'styled-components/native';

import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native-web';

// react-native-web for styling

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: 'violet',
	},
	text: { color: 'black' },
});

const CtaNew = ({ onPress, text }) => {
	return (
		<View style={styles.container} onClick={onPress}>
			<Text style={styles.text}>{text} this is just a test</Text>
		</View>
	);
};

class ctaWeb extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const mountPoint = document.createElement('div');

		mountPoint.id = 'react-app-root';

		const app = document.createElement('div');

		app.id = 'react-app-slot';

		mountPoint.appendChild(app);

		this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

		// const styleSlot = this.shadowRoot.querySelector('#react-app-root');

		const text = this.getAttribute('text');
		const onPress = this.getAttribute('on-press');

		// const StyledCta = styled(Cta)`
		// 	padding: 1em 2em;
		// 	background: violet;
		// `;

		const root = ReactDOM.render(
			// <StyleSheetManager target={styleSlot}>
			<CtaNew text={text} onPress={onPress} />,
			// </StyleSheetManager>,
			app
		);
	}
}

customElements.define('krui-cta', ctaWeb);
