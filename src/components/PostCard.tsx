import { View, Text, Image, TouchableOpacity, Modal, FlatList, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { use, useState } from 'react';

export default function PostCard() {
  const [liked, setLiked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const toggleModal = () => setModalVisible(!modalVisible);

  const dummyCommnets = Array.from({ length: 6 }, (_, i) => ({
    id: i.toString(),
    user: `user${i + 1}`,
    text: `${i + 1}`
  }));

  return (
    <View className='mb-5'>
      <View className='flex-row items-center p-2'>
        <Image source={{ uri: 'https://placekitten.com/100/100' }} className='w-10 h-10 rounded-full mr-2' />
        <Text className='font-bold text-base'>cute_kitty</Text>
      </View>
      <Image source={{ uri: 'https://placekitten.com/600/400' }} className='w-full h-72' />
      <View className='flex-row p-2'>
        <TouchableOpacity onPress={toggleLike}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={24} color={liked ? 'red' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity className='ml-4' onPress={toggleModal}>
          <Ionicons name='chatbubble-outline' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <Text className='px-2 text-sm'>{liked ? '좋아요 1개' : '좋아요 없음'}</Text>

      <Modal visible={modalVisible} animationType='slide'>
        <View className='flex-1 justify-center items-center bg-white'>
          <Text className='text-lg font-bold mb-4'>댓글</Text>
          <FlatList
            data={dummyCommnets}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className='flex-row items-center mb-2'>
                <Text className='font-bold mr-2'>{item.user}</Text>
                <Text>{item.text}</Text>
              </View>
            )}
          ></FlatList>
          <Button title='닫기' onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
