import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
	shadow: {
		// IOS
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		// Android
		elevation: 4,
	},
});
