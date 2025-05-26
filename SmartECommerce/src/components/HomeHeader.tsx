import { View, Text, Image } from 'react-native';
import React from 'react';
import { IMAGES } from '@/src/constants/images';
import { vs, s } from 'react-native-size-matters';

export default function HomeHeader() {
	return (
		<View
			className="items-center justify-center bg-secondary-foreground dark:bg-secondary"
			style={{ padding: vs(10) }}
		>
			<Image
				source={IMAGES.appLogo}
				style={{ height: vs(40), width: s(40), tintColor: 'white' }}
			/>
		</View>
	);
}
