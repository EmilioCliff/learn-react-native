import { Button } from '@/src/components/ui/button';
import { Text } from '@/src/components/ui/text';
import { IMAGES } from '@/src/constants/images';
import { Link, router } from 'expo-router';
import { View, Image } from 'react-native';
import { useSession } from '@/src/context/AuthContext';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import AppControlerInput from '@/src/components/AppControlerInput';
import { zodResolver } from '@hookform/resolvers/zod';

const loginFormSchema = z.object({
	email: z.string().email('invalid email'),
	password: z.string().min(4, 'short password'),
});

type loginFormType = z.infer<typeof loginFormSchema>;

export default function SignInPage() {
	const { signIn } = useSession();
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmit = (values: loginFormType) => {
		console.log(values);
		signIn();
		router.replace('/');
	};

	const onError = (errors: any) => {
		console.log(errors);
	};

	return (
		<View className="flex-1 justify-center items-center">
			<Image source={IMAGES.appLogo} className="w-[150] h-[200]" />
			<AppControlerInput
				control={control}
				name="email"
				placeholder="example@gmail.com"
				className="w-[90%] rounded-3xl"
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
				// onPress={handleSubmit(onSubmit, onError)}
				onPress={() => {
					signIn();
					router.replace('/');
				}}
				className="mx-auto mb-4 w-[90%]"
			>
				<Text>Login</Text>
			</Button>
			<Link href={'./signup'} asChild>
				<Button className="mx-auto w-[90%]" variant={'outline'}>
					<Text>Sign Up</Text>
				</Button>
			</Link>
		</View>
	);
}
