import { FlatList } from 'react-native';
import PostCard from './src/components/PostCard';
import './global.css';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import StoryList from './src/components/StoryList';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const dummyData = Array.from({ length: 10 }, (_, i) => i); // 더미 데이터
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
