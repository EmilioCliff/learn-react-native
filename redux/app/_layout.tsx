import store from '@/store/store';
import { Stack, Tabs } from 'expo-router';
import { Provider } from 'react-redux';

export default function RootLayout() {
	return (
		<Provider store={store}>
			<Tabs />
		</Provider>
	);
}
