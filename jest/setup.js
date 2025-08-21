import '@testing-library/jest-native/extend-expect';

// Gesture handler and reanimated testing setup
import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Add any additional global mocks here if needed


