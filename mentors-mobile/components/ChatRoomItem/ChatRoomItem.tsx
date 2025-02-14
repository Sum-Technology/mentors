import React from 'react'

import { StyleSheet, Text, View, Image, useColorScheme, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";

const ChatRoomItem = ({chatRoom} ) => {

  const navigation = useNavigation();

    const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const onPress = () => {
      navigation.navigate('ChatRoom', { id: chatRoom.id })
    }


   const user = chatRoom.users[1];


  return (
    <TouchableOpacity onPress={onPress} style={themeContainerStyle }>
        <Image style={styles.avatar} source={{ uri: user.imageUri}} />
        <View style={styles.row}>
          <View style={styles.primary}>
            <Text style={themeTextStyle}>{user.name}</Text>
            <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).fromNow()}</Text>
          </View>
          <Text numberOfLines={1} style={styles.message}>{chatRoom.lastMessage.content}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ChatRoomItem

const styles = StyleSheet.create({

    row: {
      flex: 1,
      justifyContent: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginRight: 10,
    },
    primary: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',  
    },
    time: {
      color: 'grey',
    },
    message: {
      color: 'grey',
      fontSize: 16,
      marginTop: 4,
    },
    lightThemeText: {
        color: '#242c40',
        fontSize: 16,
        fontWeight: "bold",
      },
      darkThemeText: {
        color: '#d0d0c0',
        fontSize: 16,
        fontWeight: "bold",
      },
      lightContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
      },
      darkContainer: {
        backgroundColor: '#000',
        flexDirection: 'row',
        padding: 10,
      },
  });
  