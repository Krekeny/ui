import styled from 'styled-components/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const StyledView = styled(View)`
	background-color: purple;
	color: white;
	border: 1px solid purple;
	padding: 15px 30px;
`;

const StyledText = styled(Text)`
	background-color: purple;
	color: white;
	border: 1px solid purple;
	padding: 15px 30px;
`;

export const Cta2 = ({ onPress, text, test }) => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		console.log('click');

		if (typeof onPress !== 'function') return;

		setCount(count + 1);

		onPress();
	};

	return (
		<StyledView onStartShouldSetResponder={handleClick}>
			<StyledText>Cta2 text {count}</StyledText>
		</StyledView>
	);
};
