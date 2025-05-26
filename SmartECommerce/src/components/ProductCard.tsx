import { Text } from '@/src/components/ui/text';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/src/components/ui/card';
import { Image, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '../constants/sharedStyles';
import { Product } from '../types/app';

export default function ProductCard({
	onAddToCartPress,
	product,
}: {
	onAddToCartPress: () => void;
	product: Product;
}) {
	return (
		<Card
			style={{ height: vs(190), width: s(160), ...commonStyles.shadow }}
			className="rounded-2xl relative"
		>
			<TouchableOpacity
				onPress={onAddToCartPress}
				className="absolute left-2 top-2 z-10 justify-center items-center rounded-full bg-secondary-foreground dark:bg-secondary"
				style={{ height: s(26), width: s(26) }}
			>
				<Ionicons name="cart" size={s(15)} color={'white'} />
			</TouchableOpacity>
			<View
				className="overflow-hidden p-4"
				style={{ height: vs(130), width: '100%' }}
			>
				<Image
					source={{ uri: product.imageURL }}
					className="mx-auto h-full w-full"
				/>
			</View>
			<CardContent>
				<Text>{product.title}</Text>
				<CardTitle className="mt-2">{product.price} $</CardTitle>
			</CardContent>
		</Card>
	);
}
