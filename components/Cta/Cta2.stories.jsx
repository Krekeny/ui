import React from 'react';
import { Cta2 } from './Cta2';

const CtaMeta = {
	title: 'Cta2',
	component: Cta2,
	argTypes: {
		onPress: { action: 'pressed the Cta 2' },
	},
	args: {
		text: 'Hello world',
	},
};

export default CtaMeta;

export const Basic = (args) => <Cta2 {...args} />;
