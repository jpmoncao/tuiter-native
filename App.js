import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Feed from './src/pages/Feed/Feed';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-800">
      <Feed />
      <StatusBar style="auto" translucent={true} />
    </View>
  );
}
