import { Button } from '@/src/components/ui/button';
import { Text } from '@/src/components/ui/text';
import { IMAGES } from '@/src/constants/images';
import { Link, router } from 'expo-router';
import { View, Image, ScrollView } from 'react-native';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import AppControlerInput from '@/src/components/AppControlerInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from '@/src/context/AuthContext';

const signupFormSchema = z.object({
	username: z.string().min(5, 'username should have 5 chars'),
	email: z.string().email('invalid email'),
	password: z.string().min(4, 'short password'),
});

type signupFormType = z.infer<typeof signupFormSchema>;

export default function SignUpPage() {
	const { signIn } = useSession();
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(signupFormSchema),
	});

	const onSubmit = (values: signupFormType) => {
		console.log(values);
		signIn();
		router.replace('/');
	};

	const onError = (errors: any) => {
		console.log(errors);
	};
	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			keyboardShouldPersistTaps="handled"
		>
			<View className="flex-1 justify-center items-center">
				<Image
					source={IMAGES.appLogo}
					className="mx-auto w-[150] h-[200]"
				/>
				<AppControlerInput
					control={control}
					name="username"
					placeholder="example@gmail.com"
					className="w-[90%] rounded-3xl"
					keyboardType="email-address"
				/>
				<AppControlerInput
					control={control}
					name="email"
					placeholder="example@gmail.com"
					className="w-[90%] mt-4 rounded-3xl"
					keyboardType="email-address"
				/>
				<AppControlerInput
					control={control}
					name="password"
					placeholder="password"
					secureTextEntry={true}
					className="w-[90%] mt-4 rounded-3xl"
				/>
				<Text className="font-bold text-lg mt-2 mb-6 text-center">
					Smart E Commerce
				</Text>
				<Button
					onPress={handleSubmit(onSubmit, onError)}
					className="mx-auto mb-4 w-[90%]"
				>
					<Text>Create New Account</Text>
				</Button>
				<Link href={'./signin'} asChild>
					<Button className="mx-auto w-[90%]" variant={'outline'}>
						<Text>Go To SignIn</Text>
					</Button>
				</Link>
			</View>
		</ScrollView>
	);
}
