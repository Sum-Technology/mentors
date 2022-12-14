import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'


import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../../components/Themed'; 



const MessageInput = () => {

    const [ message, setMessage ] = useState('');

    const sendMessage = () => {
        console.warn('send message') ;
        setMessage('');
    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            null
        }
    }

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      
      keyboardVerticalOffset={90}
    >
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="smile" size={20} color="grey" />
        <TextInput 
            style={styles.textInput} 
            
            value={message}
            onChangeText={setMessage}
            placeholder='Message'
        />
        <MaterialCommunityIcons name="microphone-outline" size={20} color="gray" />
      </View>
      <TouchableOpacity onPress={onPress} style={[styles.button, message ? { opacity: 1 } : { opacity: .4 } ]}>
        <Ionicons name="ios-arrow-up" size={20} color="white" />
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default MessageInput

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer : {
        flex: 1,
        flexDirection: 'row',
        border: 1,
        borderColor: '#26252A',
        borderRadius: 40, 
        marginRight: 10,
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    textInput : {
        fontSize: 16,
        paddingLeft: 10,
        flex: 1,
        color: '#fff',
    },
    button : {
        width: 32,
        height: 32,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2293FE',
    },
})