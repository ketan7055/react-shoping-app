import "react-native-gesture-handler/jestSetup";

// Expo core mock
jest.mock("expo", () => ({
  ...jest.requireActual("expo"),
}));

// Expo-modules-core mock
jest.mock("expo-modules-core", () => ({
  EventEmitter: jest.fn(),
  NativeModule: jest.fn(),
  requireNativeModule: jest.fn(() => ({})),
}));

// Conditionally mock expo-router (skip if not installed)
try {
  jest.mock("expo-router", () => ({
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    }),
    useSearchParams: () => ({}),
    Stack: ({ children }) => children,
  }));
} catch (e) {
  // expo-router not installed, ignore
}

// React Navigation mock
jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

// Safe attempt at old RN helper
try {
  jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper", () => ({}));
} catch (e) {
  // ignore if missing
}
