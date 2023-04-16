import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native-web';
import React from 'react';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: 'violet',
	},
	text: { color: 'black' },
});

const CtaWeb = ({ onpress, text }) => {
	return (
		<View style={styles.container} onClick={onpress}>
			<Text style={styles.text}>{text} this is just a test</Text>
		</View>
	);
};

customElements.define('krui-cta', CtaWeb);
