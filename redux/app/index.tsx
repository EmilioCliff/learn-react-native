import {
	increaseTotalLikes,
	increaseTotalLikesByAmount,
} from '@/store/actions/dataActions';
import { updateUserRole } from '@/store/actions/settingsActions';
import { RootState } from '@/store/store';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function Index() {
	const totalLikes = useSelector(
		(state: RootState) => state.dataReducer.totalLikes,
	);
	const role = useSelector((state: RootState) => state.settings.userRole);
	const dispatch = useDispatch();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Home Screen</Text>
			<Text>Total Count: {totalLikes}</Text>
			<Text>Role: {role}</Text>
			<Button
				title="Update User Role"
				onPress={() => dispatch(updateUserRole('Owner'))}
			/>
			<Button title="+" onPress={() => dispatch(increaseTotalLikes())} />
			<Button
				title="+ By Amount"
				onPress={() => dispatch(increaseTotalLikesByAmount(10))}
			/>
		</View>
	);
}
