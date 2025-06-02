import { FlatList, Image, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;

export default function PostDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { posts, initialIndex } = route.params;

  const renderItem = ({ item }: { item: any }) => (
    <View style={{ paddingBottom: 16 }}>
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
        keyExtractor={(item) => item.id}
        initialScrollIndex={initialIndex}
        getItemLayout={(data, index) => ({
          length: 350,
          offset: 350 * index,
          index
        })}
      />
    </View>
  );
}
