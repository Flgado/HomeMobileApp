import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import { fetchAuthSession } from 'aws-amplify/auth';
import { COLORS } from '../constants/theme';
import { images } from '../constants';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import ControlGateButton from '../components/common/buttons/openGateButton';
import controlGate from '../services/api/api'
type RootDrawerParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
};


const Drawer = createDrawerNavigator<RootDrawerParamList>();

function FeedScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text>Feed Screen</Text>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
}

function Home() {
  const [token, setToken] = useState('');

  const fetchToken = async () => {
    try {
      const session = await fetchAuthSession();
      if (session && session.tokens && session.tokens.accessToken) {
        const accessToken = session.tokens.accessToken;
        const tokenString = accessToken.toString(); // Convert to string if necessary
        setToken(tokenString);
      } else {
        setToken('No access token found'); // Handle case where token is not found
      }
    } catch (error) {
      setToken('Error fetching token'); // Handle error case
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  const handleControlGate = async () => {
    const requestData = {
      topic: 'gateOperation',
      message: 'open',
    };

    try {
      const status = await controlGate(token, requestData);
      Alert.alert('Success', `Gate control successful with status: ${status}`);
    } catch (error) {
      Alert.alert('Error', 'Failed to control gate');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        
      />
      
      <View style={{ padding: 20 }}>
      <ControlGateButton 
          onPress={handleControlGate} 
          title="Open Gate" 
          backgroundColor={COLORS.primary} 
        />
        <ControlGateButton 
          onPress={handleControlGate} 
          title="Close Gate" 
          backgroundColor={COLORS.secondary}
        />
      </View>
    </SafeAreaView>
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home"
  screenOptions={{
    headerStyle: { backgroundColor: COLORS.lightWhite },
    headerShadowVisible: false,
    headerRight: () => (
      <ScreenHeaderBtn iconUrl={images.profile} dimension={40} handlePress={() => {}} />
    ),
    headerTitle: '',
  }}>
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="Feed" component={FeedScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <DrawerNavigator />
    </SafeAreaView>
  );
}

export default withAuthenticator(App);
