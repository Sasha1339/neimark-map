import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from "./app/styles/colors";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useRef, useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {MapServiceComponent} from "./app/components/MapServiceComponent/MapServiceComponent";
import {MapHotelsProvider} from "./app/providers/Hotels/MapHotelsProvider";

export default function App() {
  const [loaded, error] = useFonts({
    'Biform': require('./assets/fonts/Paratype - Biform Regular.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{flex: 1}} >
      <SafeAreaProvider>
        <SafeAreaView style={styles.areaContent}>
          <MapHotelsProvider>
            <MapServiceComponent />
          </MapHotelsProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  areaContent: {
    flex: 1,
    backgroundColor: colors.background_main,
    overflow: 'hidden',
  },
  pageView: {
    height: '90%',
    width: '100%',
  },
  switcher: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
});

