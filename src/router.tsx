import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen'
import { SyncScreen } from './screens/SyncScreen'
import { CadastroScreen } from './screens/CadastroScreen'
import { ClienteScreen } from './screens/ClienteScreen'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function DrawerNavigation(){
    return(
        <Drawer.Navigator screenOptions={{
            headerTintColor: '#2e2e2e',
            drawerActiveTintColor: '#A24CD9',
            headerStyle: {
                backgroundColor: '#f8f8ff'
            }
        }}>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Sync' component={SyncScreen}/>
            <Drawer.Screen name='Cliente' component={ClienteScreen}/>
        </Drawer.Navigator>
    )
}

export function Router(){
    return(
        <Stack.Navigator screenOptions={{
            headerTintColor: '#2e2e2e',
            headerStyle: {
                backgroundColor: '#f8f8ff'            
            }
        }}>
            <Stack.Screen options={{headerShown: false}} name='Drawer' component={DrawerNavigation}/>
            <Stack.Screen name='Cadastro' component={CadastroScreen}/>
        </Stack.Navigator>
    )
    
}