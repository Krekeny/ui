import React from 'react';
import ReactDOM from 'react-dom';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import styled from 'styled-components';
import TestCta from './Cta';

const StyledButton = styled(TouchableOpacity)`
	background: #4287f5;
	padding: 10px;
	border-radius: 5px;
`;

const StyledText = styled(Text)`
	color: white;
	text-align: center;
`;

const CtaWeb = ({ onPress, text }) => {
	return (
		<StyledButton onClick={onPress}>
			<StyledText>{text}</StyledText>
		</StyledButton>
	);
};

customElements.define('krui-cta', CtaWeb);
