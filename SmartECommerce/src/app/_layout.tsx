import '@/global.css';

import {
	Theme,
	ThemeProvider,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import { NAV_THEME } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { useFonts } from 'expo-font';
import FlashMessage from 'react-native-flash-message';
import { SessionProvider } from '../context/AuthContext';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const LIGHT_THEME: Theme = {
	...DefaultTheme,
	colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
	...DarkTheme,
	colors: NAV_THEME.dark,
};

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
	const hasMounted = React.useRef(false);
	const { isDarkColorScheme } = useColorScheme();
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
	const [loaded] = useFonts({
		SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
		Nunito: require('../../assets/fonts/Nunito-VariableFont_wght.ttf'),
	});

	useIsomorphicLayoutEffect(() => {
		if (hasMounted.current) {
			return;
		}

		setIsColorSchemeLoaded(true);
		hasMounted.current = true;
	}, []);

	if (!isColorSchemeLoaded || !loaded) {
		return null;
	}

	return (
		<SessionProvider>
			<FlashMessage position="top" />
			<ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
				<StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
				<Provider store={store}>
					<Stack
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name="(tabs)" />
						<Stack.Screen name="(auth)" />
						<Stack.Screen name="+not-found" />
					</Stack>
				</Provider>
			</ThemeProvider>
		</SessionProvider>
	);
}

const useIsomorphicLayoutEffect =
	Platform.OS === 'web' && typeof window === 'undefined'
		? React.useEffect
		: React.useLayoutEffect;
