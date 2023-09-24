import React, { useEffect } from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';

const Date = (props) => {
    const isFocused = useIsFocused();
    let rollHandler = props.updateDate
    if (!props.date) {
        rollHandler = props.selectDate
    }
    useEffect(()=>{
        async function loadDate() {
           await props.getDate()
        }
        if(!props.date && isFocused || isFocused) {loadDate()}
    }, [isFocused])

    console.log('props.date : ', props.date)
    return <View 
        style={{alignItems:'center', justifyContent:'center'}}
        >
        <View style={{ alignItems:'center', justifyContent:'center', margin:2}}>
            <View style={{ width: '100%'}}>
                <Text style={styles.titleText}>
                    {props.date ? props.date.name : null}
                </Text>
            </View>        
            <Image 
                style={ styles.image } 
                alt={ props.date 
                    ? props.date.name 
                    : null} 
                source={ props.date 
                    ? props.date.imageUrl 
                    : null} 
            />
            <Pressable 
                style={styles.button}
                onPress={() => rollHandler()} 
            >
                <Text 
                    style={styles.text}
                >Randomize!</Text>
            </Pressable>
        </View>
    </View>
}
const mapStateToProps = state => {
    return {
        date : state.game.payload
    }
}

const mapDispatchToProps = dispatch => {
    return {
        rollHandler : ()        => dispatch(actions.rollHandler()),
        getDate     : ()        => dispatch(actions.getDateGame()),
        selectDate  : (values)  => dispatch(actions.selectDate(values)),
        updateDate  : ()        => dispatch(actions.updateDateGame()),
        resetDate   : ()        => dispatch(actions.resetDateGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Date);

const styles = StyleSheet.create({
    imageContainer: {

    }, 
    image: {
        width:360,
        height:400,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 5,

    },
    titleText: {
        fontSize: 32,
        fontWeight: '800',
        textTransform: 'uppercase',
        padding: 4,
        margin: 8,
        width: '100%',
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 12,
        margin: 8,
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    //    color:'white',
    }
});