import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import PostDetailScreen from './src/screens/PostDetailScreen';
import { RootStackParamList } from './src/types/navigation.';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='MainTabs' component={BottomTabNavigator} />
        <RootStack.Screen
          name='PostDetailScreen'
          component={PostDetailScreen}
          options={{ animation: 'slide_from_right' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
