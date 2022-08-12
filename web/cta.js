import { Cta } from '../components/Cta/Cta';
// import { Logo } from '../components/Logo/Logo';
// import { Test } from '../components/Test/Test';
import * as ReactDOM from 'react-dom';
import React from 'react';

class ctaWeb extends HTMLElement {
	connectedCallback() {
		const mountPoint = document.createElement('span');
		this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

		const name = this.getAttribute('name');
		const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
		const root = ReactDOM.render(<Cta />, mountPoint);
		// const root = ReactDOM.render(<Logo />, mountPoint);
		// const root = ReactDOM.render(<Test />, mountPoint);
	}
}

customElements.define('krui-cta', ctaWeb);
