import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';




const ChatRoomScreen = () => {

    const [queryInput, setQueryInput] = useState("");

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();
    const route = useRoute();

    const navigation = useNavigation();

    navigation.setOptions({title: 'Elon Musk'})

    const messageSent = async (newText: string) => {
        if (loading) {
            return;
          }

          // messages.push() <-- the new text
          
          setLoading(true); 
        try {

            const response = await fetch("/api/elon-musk", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: newText }),
            });
            const data = await response.json();
            setResult(data.result);
            setQueryInput("");
      
          } catch(e) {
            alert('failed to generate')
          } 
          finally 
          {
            setLoading(false);
          }
    }

  return (
    
    <SafeAreaView style={styles.container}>
            <View>
                <FlatList 
                data={chatRoomData.messages}
                renderItem={({item}) => <Message message={item} />}
                />
            </View>
            <MessageInput messageSent={messageSent} />
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