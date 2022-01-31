import React from "react";
import{ NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

import Home from "./screens/Home";
import CadastrarUsuario from "./screens/CadastrarUsuario";
import Dashboard from "./screens/Dashboard";
import UsuarioDashboard from "./screens/board/UsuarioDashboard";
import ProdutoDashboard from "./screens/board/ProdutoDashboard";
import EstoqueDashboard from "./screens/board/EstoqueDashboard";
import DispositivoDashboard from "./screens/board/DispositivoDashboard";

import UsuarioForm from "./UsuarioForm";

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false,}} name='Home' component={Home} />
                <Stack.Screen options={{headerShown: false,}} name='CadastrarUsuario' component={CadastrarUsuario} />
                <Stack.Screen options={{headerShown: false,}} name='Dashboard' component={Dashboard} />
                <Stack.Screen options={{headerShown: false,}} name='UsuarioDashboard' component={UsuarioDashboard} />
                <Stack.Screen options={{headerShown: false,}} name='EstoqueDashboard' component={EstoqueDashboard} />
                <Stack.Screen options={{headerShown: false,}} name='ProdutoDashboard' component={ProdutoDashboard} />
                <Stack.Screen options={{headerShown: false,}} name='DispositivoDashboard' component={DispositivoDashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}