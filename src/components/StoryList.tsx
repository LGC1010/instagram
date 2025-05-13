import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

type StoryItem = {
  id: string;
  user: string;
  avatar: string;
};

type StoryListProps = {
  data: StoryItem[];
};

const StoryList = ({ data }: StoryListProps) => {
  const dummyStories = Array.from({ length: 15 }, (_, i) => ({
    id: i.toString(),
    name: `user${i + 1}`,
    avatar: `https://placekitten.com/100/100?image=${i + 1}`
  }));
  return (
    <View className='p-2'>
      <FlatList
        data={dummyStories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className='items-center mr-4'>
            <Image source={{ uri: item.avatar }} className='w-16 h-16 rounded-full border-2 border-pink-500' />
            <Text className='text-xs mt-1'>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default StoryList;
