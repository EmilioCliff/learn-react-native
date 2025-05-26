/// <reference types="nativewind/types" />
import { ViewProps } from 'react-native';

declare module 'react-native' {
	interface ViewProps {
		className?: string;
	}
	interface TextProps {
		className?: string;
	}
	interface PressableProps {
		className?: string;
	}
}

declare module 'lucide-react-native' {
	interface LucideProps {
		className?: string;
	}
}
