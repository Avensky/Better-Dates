
// styling
import { Colors }               from '../constants/styles';
import IconButton               from '../components/ui/IconButton';
import { Button }               from 'react-native';
// navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer }  from '@react-navigation/native';
import { useNavigation }        from '@react-navigation/native';

// screens
import Menu                     from '../screens/Game/Menu';
import Date                     from '../screens/Game/Date';
// constants
const Stack = createStackNavigator();

// Authentication screens
// function Authentication() {
//     return (
//         <Stack.Navigator 
//             screenOptions={{
//                 headerStyle: {backgroundColor: Colors.primary500}
//             }}
//         >
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Register" component={Register} />
//         </Stack.Navigator>
//     );
// };

// Authenticated screens
function AuthenticatedStack(props){
    const navigation=useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: Colors.gray700,
                contentStyle: {backgroundColor: Colors.gray700}
            }}
        >
            {/* Game Selection Screen */}
            <Stack.Screen
                name="Menu"
                component={Menu}
                props={props}
                options={{
                    headerRight: ({tintColor}) => (
                        <IconButton
                            icon="exit"
                            color={tintColor}
                            size={24}
                            onPress={()=>{}}
                            //onPress={()=>props.logout()}
                        />
                    ),
                    title: 'Menu'
                }}
            />
            {/* Date Game */}
            <Stack.Screen
                name="Date"
                options={{
                    title: 'Citas Romanticas',
                    // headerRight:({tintColor})=>(
                    //     <Button
                    //         name='plus'
                    //         title='Memories'
                    //         color={tintColor}
                    //         size={24}
                    //         onPress={()=>navigation.navigate('Moments')}
                    //     >Memories</Button>
                    // )
                }}
                component={Date}
            />
        </Stack.Navigator>
    );
};

function Navigator(props){
    return (
        <NavigationContainer>
            <AuthenticatedStack props navigation={props.navigation} />
        </NavigationContainer>
    )
}

export default Navigator;