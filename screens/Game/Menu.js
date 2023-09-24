import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../../components/ui/Button';
// import Game from './Game'
// import IceBreaker from "./IceBreaker";
import Date from "./Date";
// import * as Notifications from 'expo-notifications';

export default function Menu(props) {
    const [startGame, setStartGame] = useState(false)

    let game
    
    const startGameHandler = (game) => {
      setStartGame(game)
    }
    
    // startGame !== false 
    //   ? game = <IceBreaker onPress={()=> startGameHandler('icebreaker')} />
    //   : game = null
    // 
    if (startGame === 'cita') {
      game = <Date onPress={()=> startGameHandler('cita')} />
    } 
    // 
    // if (startGame === 'coqueteo') {
    //   game = <IceBreaker onPress={()=> startGameHandler('coqueteo')} />
    // } 
    // if (startGame === 'homeRun') {
    //   game = <Game onPress={()=> startGameHandler('homeRun')} />
    // }
    // 
    // function scheduleNotificationsHandler(){
    //   Notifications.scheduleNotificationAsync({
    //     content: {
    //       title: 'My first local notification',
    //       body: 'This is the body of the notification',
    //       data: {userName: 'Max'},
    //     },
    //     trigger: {
    //         seconds: 5
    //     }
    //   });
    // }
    
    return (      
        <View
            style={styles.container}
            // bgColor='blueGray.900'
            // _dark={{ bg: "blueGray.900" }}
            // _light={{ bg: "blueGray.300" }}
            // px='4'
            // h='100%'
            // display='flex'
            // flex='1'
        >
            
            <View
                style={styles.buttonContainer}
                // display='flex'
                // alignItems='center'
                // justifyContent='center'
                // flex='1'
                // flexDirection='row'
                // justifyContent="space-around"
            >
                <Button onPress={()=> props.navigation.navigate('Date')}>
                    Better Dates
                </Button>
            </View>
            {game} 
            
        </View>
    );
;}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
    }
  });
  