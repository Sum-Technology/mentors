import React from 'react';

import { StyleSheet, Text, View, useColorScheme } from 'react-native';



const darkSender = '#1A89FE';
const darkReceiver = '#26252A';
const lightSender = '#2293FE';
const lightReceiver = '#E9E9EB';

const myId = 'u1';


const Message = ({ message }) => {

    const isMe = message.user.id === myId;

    const colorScheme = useColorScheme();

    const messageTextStyle = colorScheme === 'light' ? styles.lightMessageText : styles.darkMessageText;
    const messageBackgroundStyle =
      colorScheme === 'light' ? styles.lightMessageBackground : styles.darkMessageBackground;
  

  return (
    <View style={[styles.container, isMe ?  styles.rightContainer : styles.leftContainer
    ]}>
      <Text style={styles.text}>{message.content}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white',
    },
    lightMessageBackground: {
        backgroundColor: '#fff'
    },
    darkMessageBackground: {
        backgroundColor: darkReceiver,
    },
    leftContainer: {
        backgroundColor: darkReceiver,
        marginLeft: 10,
        marginRight: 'auto',
    },
    rightContainer: {
        backgroundColor: darkSender,
        marginLeft: 'auto',
        marginRight: 10,
    },
})