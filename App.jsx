import { Provider } from './app/provider';
import { NativeNavigation } from './app/navigation/native';

// import StorybookUIRoot from "./.ondevice/Storybook";
// export { StorybookUIRoot as default };

// TODO wait for @storybook/react-native to support 6.4
// const App = () => {
//   return (
//     <SafeAreaProvider style={styles.container}>
//       <SafeAreaView style={styles.container}>
//         <StorybookUIRoot />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

const App = () => {
	return (
		<Provider>
			<NativeNavigation />
		</Provider>
	);
};

export default App;
