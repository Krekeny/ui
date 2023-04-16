import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { StyleSheet, View } from 'react-native-web';

// export const StyleOptions = {
// 	container: {
// 		paddingHorizontal: 16,
// 		paddingVertical: 8,
// 		backgroundColor: 'red',
// 	},
// 	text: { color: 'black' },
// };

// const styles = StyleSheet.create({
// 	container: {
// 		paddingHorizontal: 16,
// 		paddingVertical: 8,
// 		backgroundColor: 'yellow',
// 	},
// 	text: { color: 'black' },
// });

const Tester = styled.Text`
	background-color: purple;
	color: white;
	border: 1px solid purple;
	padding: 15px 30px;
`;

// const Container = styled.TouchableOpacity`
// 	padding: 1em 2em;
// 	background: violet;
// `;

// export const Cta = ({ onPress, text }) => {
// 	return (
// 		<Container onPress={onPress}>
// 			<Text>{text}this is just a test</Text>
// 		</Container>
// 	);
// };

export const Cta = ({ onPress, text, test }) => {
	console.log('🚀 ~ file: Cta.jsx:39 ~ Cta ~ onPress:', onPress);
	console.log('🚀 ~ file: Cta.jsx:40 ~ Cta ~ onPress:', typeof onPress);
	const handleClick = () => {
		if (typeof onPress !== 'function') return;

		onPress();

		console.log('in component click handler');
	};

	// <Text style={styles.text}>{text} this is just a test</Text>
	return (
		<View onClick={handleClick}>
			<Tester>blablabla</Tester>
		</View>
	);
};
