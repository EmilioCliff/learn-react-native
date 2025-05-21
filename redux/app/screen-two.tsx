import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function ScreenTwo() {
	const totalLikes = useSelector(
		(state: RootState) => state.dataReducer.totalLikes,
	);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Second Screen</Text>
			<Text>Total Count: {totalLikes}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
