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
  
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};