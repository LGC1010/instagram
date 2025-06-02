import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' component={HomeScreen} />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
    </Tab.Navigator>
  );
}
