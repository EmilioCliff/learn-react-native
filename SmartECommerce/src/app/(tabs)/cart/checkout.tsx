import { Alert, View } from 'react-native';
import { Card } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { Text } from '@/src/components/ui/text';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import AppControlerInput from '@/src/components/AppControlerInput';

const formSchema = z.object({
	fullName: z.string().min(3, 'Name must be more than three chars'),
	phoneNumber: z
		.string()
		.min(10, 'Phone number must be more than ten letters'),
	detailedAddress: z.string().min(5, 'Address must be more than five char'),
});

type formType = z.infer<typeof formSchema>;

export default function CheckOutPage() {
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: '',
			phoneNumber: '',
			detailedAddress: '',
		},
	});

	const onSubmit = (values: formType) => {
		Alert.alert(JSON.stringify(values));
		console.log(values);
	};

	function onError(errors: any) {
		console.log('Errors: ', errors);
	}
	return (
		<View className="flex-1 justify-between p-2">
			<Card className="p-2 gap-2 mt-4">
				<AppControlerInput
					control={control}
					name="fullName"
					placeholder="Full Name"
				/>
				<AppControlerInput
					control={control}
					name="phoneNumber"
					placeholder="Phone Number"
				/>
				<AppControlerInput
					control={control}
					name="detailedAddress"
					placeholder="Detailed Address"
				/>
			</Card>
			<Button onPress={handleSubmit(onSubmit, onError)} className="my-2">
				<Text>Continue</Text>
			</Button>
		</View>
	);
}
