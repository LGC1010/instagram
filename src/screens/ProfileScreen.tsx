import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation.';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemSize = screenWidth / numColumns;

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PostDetailScreen'>;

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<'posts' | 'tags' | 'saved'>('posts');
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [taggedPosts, setTaggedPosts] = useState<any[]>([]);
  const [savedPosts, setSavedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch('https://dummyjson.com/users/1');
        const userData = await userRes.json();
        setUser(userData);

        const postsRes = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
        const postsData = await postsRes.json();
        setPosts(postsData);

        const tagsRes = await fetch('https://picsum.photos/v2/list?page=2&limit=5');
        const tagsData = await tagsRes.json();
        setTaggedPosts(tagsData);

        const savedRes = await fetch('https://picsum.photos/v2/list?page=3&limit=2');
        const savedData = await savedRes.json();
        setSavedPosts(savedData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getActiveData = () => {
    if (activeTab === 'posts') return posts;
    if (activeTab === 'tags') return taggedPosts;
    if (activeTab === 'saved') return savedPosts;
    return [];
  };

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </SafeAreaView>
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          key={activeTab}
          data={getActiveData()}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          ListHeaderComponent={
            <View className='p-4'>
              <View className='flex-row'>
                <Image source={{ uri: user.image }} className='w-24 h-24 rounded-full mb-2' />
                <View className='ml-2'>
                  <Text className='text-lg font-bold'>{user.username}</Text>
                  <View className='flex-row justify-between w-[80%]'>
                    <View>
                      <Text className='font-bold'>{posts.length}</Text>
                      <Text className='text-xs'>게시물</Text>
                    </View>
                    <View>
                      <Text className='font-bold'>100</Text>
                      <Text className='text-xs'>팔로워</Text>
                    </View>
                    <View>
                      <Text className='font-bold'>120</Text>
                      <Text className='text-xs'>팔로잉</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text>i'am {user.username}</Text>

              <View className='flex-row justify-around border-b border-gray-300 mt-4'>
                <TouchableOpacity onPress={() => setActiveTab('posts')} className='items-center flex-1 py-2'>
                  <Ionicons name='grid-outline' size={24} color={activeTab === 'posts' ? 'black' : 'gray'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('tags')} className='items-center flex-1 py-2'>
                  <Ionicons name='pricetag-outline' size={24} color={activeTab === 'tags' ? 'black' : 'gray'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('saved')} className='items-center flex-1 py-2'>
                  <Ionicons name='bookmark-outline' size={24} color={activeTab === 'saved' ? 'black' : 'gray'} />
                </TouchableOpacity>
              </View>
            </View>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PostDetailScreen', { post: item })}
              style={{ width: itemSize, height: itemSize, padding: 2 }}
            >
              <Image source={{ uri: item.download_url }} style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </>
  );
}
