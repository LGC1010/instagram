import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import StoryList from '../components/StoryList';
import PostCard from '../components/PostCard';

export default function HomeScreen() {
  const dummyStories = Array.from({ length: 10 }, (_, i) => ({
    id: i.toString(),
    user: `user${i + 1}`,
    avatar: `https://placekitten.com/100/100?image=${i + 1}`
  }));

  const dummyPosts = Array.from({ length: 10 }, (_, i) => ({
    id: i.toString()
  }));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<StoryList data={dummyStories} />}
        contentContainerStyle={{ paddingBottom: 0 }}
        renderItem={({ item }) => <PostCard />}
      />
    </SafeAreaView>
  );
}
