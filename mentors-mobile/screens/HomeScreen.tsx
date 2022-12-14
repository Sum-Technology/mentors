import * as React from "react";
import { Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Auth } from 'aws-amplify';
import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function HomeScreen() {

  const chatRoom1 = chatRoomsData[0];
  const chatRoom2 = chatRoomsData[2];

  const logOut = () => {
    Auth.signOut();
  }


  return (
    <View style={styles.container}>
      <FlatList 
        data={chatRoomsData}
        renderItem = {({item}) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity onPress={logOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
