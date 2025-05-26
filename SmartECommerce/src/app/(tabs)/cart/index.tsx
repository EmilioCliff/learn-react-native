import AppSafeView from '@/src/components/AppSafeView';
import CartItem from '@/src/components/CartItem';
import EmptyCart from '@/src/components/EmptyCart';
import HomeHeader from '@/src/components/HomeHeader';
import TotalsView from '@/src/components/TotalsView';
import { Button } from '@/src/components/ui/button';
import { Text } from '@/src/components/ui/text';
import { View, SafeAreaView } from 'react-native';
import { products } from '@/src/data/products';
import { FlashList } from '@shopify/flash-list';
import { vs } from 'react-native-size-matters';
import { Link } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '@/src/store/store';
import {
	addItem,
	removeItem,
	removeProductFromCart,
} from '@/src/store/reducers/cartSlice';
import { SHIPPING_FEE, TAX } from '@/src/constants/app';
import { useSession } from '@/src/context/AuthContext';

export default function CartPage() {
	const { items } = useSelector((state: RootState) => state.cartSlice);
	const dispatch = useDispatch();
	const totalItemPrice = items.reduce((acc, item) => acc + item.sum, 0);
	const totalOrderPrice = totalItemPrice + SHIPPING_FEE + TAX;

	return (
		<AppSafeView>
			<HomeHeader />
			{items.length > 0 ? (
				<>
					<View className="flex-1 justify-between p-2">
						<FlashList
							data={items}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => (
								<CartItem
									product={item}
									quantity={item.quantity}
									sum={item.sum}
									onIncrease={() => dispatch(addItem(item))}
									onDecrease={() =>
										dispatch(removeItem(item))
									}
									onDelete={() =>
										dispatch(removeProductFromCart(item))
									}
								/>
							)}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{ paddingBottom: vs(4) }}
							estimatedItemSize={225}
						/>
						<TotalsView
							totalItemPrice={totalItemPrice}
							totalOrderPrice={totalOrderPrice}
						/>
					</View>
					<Link href={'/(tabs)/cart/checkout'} asChild>
						<Button className="my-2">
							<Text>Continue</Text>
						</Button>
					</Link>
				</>
			) : (
				<EmptyCart />
			)}
		</AppSafeView>
	);
}
