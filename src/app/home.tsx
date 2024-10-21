import { SafeAreaView, View, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import { COLORS } from '../constants/theme';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import ControlGateButton from '../components/common/buttons/openGateButton';
import {controlGate} from '../services/api/api'
import EditProfileView from './profile';
import { Provider } from 'react-redux';
import { store } from './hooks/store';
type RootDrawerParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function Home() {

  const handleControlGate = async () => {
    const requestData = {
      topic: 'controlGate',
      message: 'open',
    };

    try {
      const status = await controlGate(requestData);
      Alert.alert('Success', 'Gate control successful with status: ${status}');
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
      <ScreenHeaderBtn dimension={40} handlePress={() => {}} />
    ),
    headerTitle: '',
  }}>
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="Profile" component={EditProfileView} />
  </Drawer.Navigator>
);

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <DrawerNavigator />
    </SafeAreaView>
    </Provider>
     </Authenticator>
    </Authenticator.Provider>
  );
}

export default App; 