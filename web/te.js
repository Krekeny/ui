import Cta from '../components/Cta/Cta';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { StyleSheetManager } from 'styled-components';
import styled from 'styled-components';

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

		const styleSlot = this.shadowRoot.querySelector('#react-app-root');

		const text = this.getAttribute('text');

		const StyledCta = styled(Cta)`
			padding: 1em 2em;
			background: violet;
		`;

		const root = ReactDOM.render(
			<StyleSheetManager target={styleSlot}>
				<StyledCta text={text} />
			</StyleSheetManager>,
			app
		);
	}
}

customElements.define('krui-cta', ctaWeb);
