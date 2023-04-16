import { View, Text } from 'react-native-web';
import styled from 'styled-components';
import React, { useState } from 'react';

const StyledView = styled.div`
	background-color: purple;
	color: white;
	border: 1px solid purple;
	padding: 15px 30px;
`;

const StyledText = styled.p`
	background-color: purple;
	color: white;
	border: 1px solid purple;
	padding: 15px 30px;
`;

export const Cta2 = ({ onPress, text, test }) => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		if (typeof onPress !== 'function') return;

		setCount(count + 1);

		onPress();
	};

	return (
		<StyledView onClick={handleClick}>
			<StyledText>blablabla {count}</StyledText>
		</StyledView>
	);
};
