import { SafeAreaView, StyleSheet, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Import Expo's StatusBar
import { WebView } from 'react-native-webview';
import { useNavigation } from 'expo-router';
import { setStatusBarHidden } from 'expo-status-bar';
import { useEffect } from 'react';

export default function HomeScreen() {

  useEffect(() => {
    setStatusBarHidden(false, 'none')
  })

  return (
    <>
      {/* Expo StatusBar for consistent behavior across platforms */}
      <StatusBar style="dark" backgroundColor="transparent" translucent={true} />

      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://booker-mark.vercel.app' }}
          style={styles.webview}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0: RNStatusBar.currentHeight
  },
  webview: {
    flex: 1
  }
});