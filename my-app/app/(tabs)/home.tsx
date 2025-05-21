import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomePage() {
	return (
		<View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
			<Text className="text-white">Home Page</Text>
			<Text className="text-4xl text-white">Freelance</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
