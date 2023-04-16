// import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation';

export function Provider({ children }) {
	return (
		<NavigationProvider>
			{/* <Dripsy>{children}</Dripsy> */}
			{children}
		</NavigationProvider>
	);
}
