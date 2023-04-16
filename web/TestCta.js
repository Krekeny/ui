import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
	background: #4287f5;
	padding: 10px;
	border-radius: 5px;
`;

const StyledText = styled.Text`
	color: white;
	text-align: center;
`;

const TestCta = ({ onPress, text }) => {
	return (
		<StyledButton onPress={onPress}>
			<StyledText>{text}</StyledText>
		</StyledButton>
	);
};

export default TestCta;
