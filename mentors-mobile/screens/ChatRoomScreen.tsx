import React from 'react';

import { StyleSheet, Text, View, FlatList, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';




const ChatRoomScreen = () => {

    const route = useRoute();

    const navigation = useNavigation();

    navigation.setOptions({title: 'Elon Musk'})

  return (
    
    <SafeAreaView style={styles.container}>
            <View>
                <FlatList 
                data={chatRoomData.messages}
                renderItem={({item}) => <Message message={item} />}
                />
            </View>
            <MessageInput />
    </SafeAreaView>
    

  )
}

export default ChatRoomScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    avoid: {
        backgroundColor: 'blue',
        flex: 1,
    }
})