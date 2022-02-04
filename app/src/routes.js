import React from "react";
import{ NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

import Home from "./screens/Home";
import CadastrarUsuario from "./screens/CadastrarUsuario";
import Dashboard from "./screens/Dashboard";

import UsuarioCreate from "./screens/board/crudUsuario/UsuarioCreate";
import UsuarioRead from "./screens/board/crudUsuario/UsuarioRead";
import UsuarioUpdate from "./screens/board/crudUsuario/UsuarioUpdate";

import ProdutoCreate from "./screens/board/crudProduto/ProdutoCreate";
import ProdutoRead from "./screens/board/crudProduto/ProdutoRead";
import ProdutoUpdate from "./screens/board/crudProduto/ProdutoUpdate";

import EstoqueCreate from "./screens/board/crudEstoque/EstoqueCreate";
import EstoqueRead from "./screens/board/crudEstoque/EstoqueRead";
import EstoqueUpdate from "./screens/board/crudEstoque/EstoqueUpdate";

import DispositivoCreate from "./screens/board/crudDispositivo/DispositivoCreate";
import DispositivoRead from "./screens/board/crudDispositivo/DispositivoRead";
import DispositivoUpdate from "./screens/board/crudDispositivo/DispositivoUpdate";

import UsuarioForm from "./UsuarioForm";

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false,}} name='Home' component={Home} />
                <Stack.Screen options={{headerShown: true,}} name='CadastrarUsuario' component={CadastrarUsuario} />
              
                <Stack.Screen options={{headerShown: false,}} name='Dashboard' component={Dashboard} />
              
                <Stack.Screen options={{headerShown: true,}} name='Criar usuário' component={UsuarioCreate} />
                <Stack.Screen options={{headerShown: true,}} name='Usuários cadastrados' component={UsuarioRead} />
                <Stack.Screen options={{headerShown: true,}} name='Modificar usuário' component={UsuarioUpdate} />
              
                <Stack.Screen options={{headerShown: true,}} name='Cadastrar estoque' component={EstoqueCreate} />
                <Stack.Screen options={{headerShown: true,}} name='Estoques cadastrados' component={EstoqueRead} />
                <Stack.Screen options={{headerShown: true,}} name='Modificar estoque' component={EstoqueUpdate} />
              
                <Stack.Screen options={{headerShown: true,}} name='Cadastrar produto' component={ProdutoCreate} />
                <Stack.Screen options={{headerShown: true,}} name='Produtos cadastrados' component={ProdutoRead} />
                <Stack.Screen options={{headerShown: true,}} name='Modificar produto' component={ProdutoUpdate} />
            
                <Stack.Screen options={{headerShown: true,}} name='Cadastrar dispositivo' component={DispositivoCreate} />
                <Stack.Screen options={{headerShown: true,}} name='Dispositivos cadastrados' component={DispositivoRead} />
                <Stack.Screen options={{headerShown: true,}} name='Modificar dispositivo' component={DispositivoUpdate} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}