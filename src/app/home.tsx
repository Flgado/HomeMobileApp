import React from 'react';
import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import icons from '../constants/icons';
import { COLORS } from '../constants/theme';  // Ensure the correct import path for COLORS
import { images } from '../constants';

function Home() {
  console.log('Menu Icon Type:', typeof icons.menu);
  console.log('Icons:', icons.menu);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension={60} handlePress={() => {}} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={100} handlePress={() => {}} />
          ),
          headerTitle: '',
        }}
      />
    </SafeAreaView>
  );
}

export default Home;
