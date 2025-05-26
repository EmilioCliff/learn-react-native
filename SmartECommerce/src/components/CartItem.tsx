import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import { s } from 'react-native-size-matters';
import { Text } from './ui/text';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Product } from '../types/app';

interface cartItemProps {
	product: Product;
	onIncrease: () => void;
	onDecrease: () => void;
	onDelete: () => void;
	quantity: number;
	sum: number;
}

export default function CartItem(props: cartItemProps) {
	return (
		<Card className="flex-row p-2 gap-2 mb-2">
			<View className="justify-center items-center">
				<Image
					className="rounded-lg"
					source={{ uri: props.product.imageURL }}
					style={{ width: s(80), height: s(80) }}
				/>
			</View>
			<View className="flex flex-grow justify-between">
				<Text className="font-bold text-lg">{props.product.title}</Text>
				<Text className="font-bold text-md">{props.sum}</Text>
				<View
					style={{ width: s(100) }}
					className="flex flex-row p-1 justify-between items-center border border-border rounded-full"
				>
					<Pressable>
						<Button
							variant={'secondary'}
							size={'sm'}
							className="rounded-full"
							onPress={props.onIncrease}
						>
							<Text className="text-lg font-bold">+</Text>
						</Button>
					</Pressable>
					<Text>{props.quantity}</Text>
					<Pressable>
						<Button
							variant={'secondary'}
							size={'sm'}
							className="rounded-full"
							onPress={props.onDecrease}
						>
							<Text className="text-lg font-bold">-</Text>
						</Button>
					</Pressable>
				</View>
			</View>
			<View>
				<Button
					variant={'ghost'}
					size={'sm'}
					className="mt-auto flex flex-row gap-2 justify-between"
					onPress={props.onDelete}
				>
					<AntDesign name="delete" color={'#dc2626'} size={s(14)} />
					<Text className="text-destructive">Delete</Text>
				</Button>
			</View>
		</Card>
	);
}
