import { View, Text } from 'react-native-web';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

const StyledView = styled.div`
	background-color: papayawhip;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 50px);
	min-width: 100vw;
`;

const AppWrapper = styled.div`
	padding: 20px;
	background-color: #ccc;
	color: #333;
	border-radius: 10px;
`;

// const Button = styled(Pressable)`
// 	background-color: purple;
// 	color: white;
// 	border: 1px solid purple;
// 	padding: 15px 30px;
// `;

const Button = styled.button`
	background-color: purple;
	color: white;
	border: 1px solid purple;
	padding: 15px 30px;
`;

export default function MyComponent() {
	const [count, setCount] = useState(0);
	return (
		<StyledView>
			<AppWrapper>
				<Text>Hello From Shadow DOM</Text>
				<h2>Body color is set to red, but I am protected!</h2>
				<Text>Current count is {count}</Text>
				<View>
					<Button
						onClick={(e) => {
							e.preventDefault();
							setCount((c) => c + 1);
						}}
					>
						<Text>Increase Count</Text>
					</Button>
				</View>
			</AppWrapper>
		</StyledView>
	);
}

// export default function MyComponent() {
// 	const [count, setCount] = useState(0);
// 	return (
// 		<StyledView>
// 			<AppWrapper>
// 				<h2>Body color is set to red, but I am protected!</h2>
// 			</AppWrapper>
// 		</StyledView>
// 	);
// }
