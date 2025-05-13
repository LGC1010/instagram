import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemSize = screenWidth / numColumns;

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch('https://dummyjson.com/users/1');
        const userData = await userRes.json();
        setUser(userData);

        const postRes = await fetch('https://dummyjson.com/posts?limit=10');
        const postData = await userRes.json();
        setPosts(postData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        ListHeaderComponent={
          <View className='p-4'>
            <Image source={{ uri: user.image }} className='w-24 h-24 rounded-full mb-2' />
            <Text className='text-lg font-bold'>
              {user.firstName} {user.lastName}
            </Text>
            <Text className='text-gray-500'>{user.email}</Text>

            <View className='flex-row justify-around mt-4'>
              <View className='items-center'>
                <Text className='font-bold'>{user.posts}</Text>
                <Text className='text-xs'>게시물</Text>
              </View>
              <View className='items-center'>
                <Text className='font-bold'>{user.followers}</Text>
                <Text className='text-xs'>팔로워</Text>
              </View>
              <View className='items-center'>
                <Text className='font-bold'>{user.following}</Text>
                <Text className='text-xs'>팔로잉</Text>
              </View>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ width: itemSize, height: itemSize, padding: 2 }}>
            <View className='bg-gray-200 flex-1 items-center justify-center'>
              <Text className='text-xs text-center'>{item.title.slice(0, 20)}...</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
