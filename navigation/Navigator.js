
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
                    title: 'Menu'
                }}
            />
            {/* Date Game */}
            <Stack.Screen
                name="Date"
                options={{
                    title: 'Better Dates'
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