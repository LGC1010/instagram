import { FlatList, SafeAreaView } from 'react-native';
import PostCard from '../components/PostCard';

export default function HomeScreen() {
  const dummyData = Array.from({ length: 10 }, (_, i) => i);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={dummyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <PostCard />}
      />
    </SafeAreaView>
  );
}