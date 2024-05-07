import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Feed from './pages/Feed';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-800">
      <Feed />
      <StatusBar style="auto" translucent={true} backgroundColor='#1f2937' />
    </SafeAreaView>
  );
}
