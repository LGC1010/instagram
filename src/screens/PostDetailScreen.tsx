import { FlatList, Image, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation.';

const screenHeight = Dimensions.get('window').height;
type PostDetailRouteProp = RouteProp<RootStackParamList, 'PostDetailScreen'>;

export default function PostDetailScreen() {
  const route = useRoute<PostDetailRouteProp>();
  const navigation = useNavigation();
  const { post, posts } = route.params;

  const startIndex = posts.findIndex((p) => p.id === post.id);

  const renderItem = ({ item }: { item: any }) => (
    <View style={{ padding: 8 }}>
      <Image source={{ uri: item.download_url }} style={{ width: '100%', height: 300 }} resizeMode='cover' />
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.author}</Text>
        <Text style={{ color: 'gray' }}>좋아요 32개</Text>
        <Text>이건 더미 설명입니다.</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 50, left: 20, zIndex: 10 }}
      >
        <Text style={{ fontSize: 18 }}>←</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialScrollIndex={startIndex}
        getItemLayout={(data, index) => ({
          length: screenHeight,
          offset: screenHeight * index,
          index
        })}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
