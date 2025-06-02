import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='HOME' component={HomeScreen} />
      <Tab.Screen name='PROFILE' component={ProfileScreen} />
    </Tab.Navigator>
  );
}
