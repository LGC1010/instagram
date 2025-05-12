import { FlatList, SafeAreaView } from 'react-native';
import PostCard from './src/components/PostCard';
import './global.css';

export default function App() {
  const dummyData = Array.from({ length: 10 }, (_, i) => i); // 더미 데이터
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <FlatList data={dummyData} keyExtractor={(item, index) => index.toString()} renderItem={() => <PostCard />} />
    </SafeAreaView>
  );
}
