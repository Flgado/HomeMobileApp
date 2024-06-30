import { Stack } from "expo-router";
import { Amplify } from "aws-amplify";
import amplifyconfig from '../amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

export default function RootLayout () {
    return (
        <Stack initialRouteName="home"
        screenOptions={{ headerTitle: ''}}/>
          
      )
}