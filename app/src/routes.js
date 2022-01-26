import React from "react";
import{ NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

import Home from "./screens/Home";
import Logado from "./screens/Logado";
import CadastrarUsuario from "./screens/CadastrarUsuario";
import AddContato from "./screens/AddContato";
import FazLogin from "./screens/FazLogin";

import UsuarioForm from "./UsuarioForm";

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false,}} name='Home' component={Home} />
                <Stack.Screen options={{headerShown: false,}} name='Logado' component={Logado} />
                <Stack.Screen options={{headerShown: false,}} name='CadastrarUsuario' component={CadastrarUsuario} />
                <Stack.Screen options={{headerShown: false,}} name='AddContato' component={AddContato} />
                <Stack.Screen options={{headerShown: false,}} name='FazLogin' component={FazLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}