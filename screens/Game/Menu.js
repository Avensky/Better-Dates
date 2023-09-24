import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../../components/ui/Button';
import Date from "./Date";

export default function Menu(props) {
    const [startGame, setStartGame] = useState(false)

    let game
    
    const startGameHandler = (game) => {
      setStartGame(game)
    }
    
    if (startGame === 'cita') {
      game = <Date onPress={()=> startGameHandler('cita')} />
    } 

    
    return (      
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
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
  