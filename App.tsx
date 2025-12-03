import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import colors from "./app/styles/colors";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useRef, useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {MapServiceComponent} from "./app/components/MapServiceComponent/MapServiceComponent";
import {MapObjectsProvider} from "./app/providers/Objects/MapObjectsProvider";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SelectedObjectContext} from "./app/providers/SelectedObjectContext/SelectedObjectContext";
import {SelectedObjectProvider} from "./app/providers/SelectedObjectContext/SelectedObjectProvider";

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
      <SafeAreaProvider>
        <SafeAreaView style={styles.areaContent}>
          <GestureHandlerRootView>
          <MapObjectsProvider>
            <SelectedObjectProvider>
              <MapServiceComponent/>
            </SelectedObjectProvider>
          </MapObjectsProvider>
          </GestureHandlerRootView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  areaContent: {
    flex: 1,
    backgroundColor: 'transparent',
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

