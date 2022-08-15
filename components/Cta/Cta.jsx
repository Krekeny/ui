import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StyleOptions = {
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: 'violet',
	},
	text: { color: 'black' },
};

const Container = styled.TouchableOpacity`
	padding: 1em 2em;
	background: violet;
`;

const styles = StyleSheet.create(StyleOptions);

export const Cta = ({ onPress, text }) => {
	return (
		<Container onPress={onPress}>
			<Text style={styles.text}>{text}this is just a test</Text>
		</Container>
	);
};
