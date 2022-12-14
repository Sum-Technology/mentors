/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View, Image, useWindowDimensions, } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import MentorsScreen from '../screens/MentorsScreen';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerTitle: props => <HomeHeader {...props} /> }} 
      />
      <Stack.Screen 
        name="MentorsScreen" 
        component={MentorsScreen} 
        options={{ title: 'Mentors' }} 
      />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} header options={{ headerTitle: props => <ChatRoomHeader {...props} /> }}  />
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeHeader = ( {props} ) => {

  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <View style={{ marginLeft: -20 ,  flex: 1, paddingHorizontal: 12, flexDirection: "row", maxWidth: width, alignItems: 'center' }}>
      {/* <Image 
      source={{ uri: 'https://static.wikia.nocookie.net/p__/images/6/64/Cameron-poe.jpg/revision/latest?cb=20150215224929&path-prefix=protagonist' }}
      style={{ height: 30, width: 30, borderRadius: 30, }} /> */}
      <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>Mentors</Text>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Pressable onPress={() => navigation.navigate('MentorsScreen')}>
          <Feather name="plus" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  )
}


const ChatRoomHeader = ( props ) => {

  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', marginLeft: -10, }}>
      <Image 
      source={{ uri: 'https://static.wikia.nocookie.net/p__/images/6/64/Cameron-poe.jpg/revision/latest?cb=20150215224929&path-prefix=protagonist' }}
      style={{ height: 30, width: 30, borderRadius: 30, }} />
      <Text style={{color: 'grey', fontSize: 16, fontWeight: 'bold', paddingLeft: 10,}}>{props.children}</Text>
      {/* <Feather name="plus" size={24} color="white" /> */}
    </View>
  )
}


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={{
          title: 'Chat Room Screen',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
