import React, { useState, useEffect } from 'react';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import store from './redux/store';
import { init } from "./utility/local-database";
//import * as SplashScreen from 'expo-splash-screen';

//SplashScreen.preventAutoHideAsync();
export default function App() {
  // set local database constants
  const [dbInitialized, setDbInitialized] = useState(false);

  // load local database
  useEffect(()=>{
    init()
      .then(()=> {
        console.log('db Initialzied')
//        SplashScreen.hideAsync();
        setDbInitialized(true)
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  if (!dbInitialized) {
    return null
  }

//  const [appIsReady, setAppIsReady] = useState(false);
//
//  useEffect(() => {
//    async function prepare() {
//      try {
//        // Keep the splash screen visible while we fetch resources
//        await SplashScreen.preventAutoHideAsync();
//        // Pre-load fonts, make any API calls you need to do here
//        // await Font.loadAsync(Entypo.font);
//        // Artificially delay for two seconds to simulate a slow loading
//        // experience. Please remove this if you copy and paste the code!
//        await new Promise(resolve => setTimeout(resolve, 2000));
//      } catch (e) {
//        console.warn(e);
//      } finally {
//        // Tell the application to render
//        setAppIsReady(true);
//      }
//    }
//
//    prepare();
//  }, []);
//
//  const onLayoutRootView = useCallback(async () => {
//    if (appIsReady) {
//      // This tells the splash screen to hide immediately! If we call this after
//      // `setAppIsReady`, then we may see a blank screen while the app is
//      // loading its initial state and rendering its first pixels. So instead,
//      // we hide the splash screen once we know the root view has already
//      // performed layout.
//      await SplashScreen.hideAsync();
//    }
//  }, [appIsReady]);
//
//  if (!appIsReady) {
//    return null;
//  }


  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};