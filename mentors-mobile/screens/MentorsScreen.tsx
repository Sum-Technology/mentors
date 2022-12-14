import React from 'react';

import { StyleSheet, Text, View, FlatList, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Message from '../components/Message';
import Mentors from '../assets/dummy-data/Users';
import MessageInput from '../components/MessageInput'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import MentorItem from '../components/MentorItem';




const MentorsScreen = () => {

    const route = useRoute();

    const navigation = useNavigation();

    navigation.setOptions({title: 'Mentors'})

  return (
    
    <SafeAreaView style={styles.container}>
            <View>
                <FlatList 
                data={Mentors}
                renderItem={({item}) => <MentorItem mentor={item} />}
                />
            </View>
        
    </SafeAreaView>
    

  )
}

export default MentorsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    avoid: {
        backgroundColor: 'blue',
        flex: 1,
    }
})