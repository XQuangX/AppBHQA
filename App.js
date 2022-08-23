import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from './Screen/Login';
import Register from './Screen/Register';
import Home from './Screen/Home.js';
import produck from './Screen/Produck.js';
import Ctproduck from './Screen/ctproduck.js';
import Giohang from './Screen/giohang23.js';
import Thanhtoan from './Screen/thanhtoan';
import ctthanhtoan from './Screen/Thanhtoanct';
import chat from './Screen/chat';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown:false }} component={Login} />
        <Stack.Screen name="Register" options={{ title:'Register' }} component={Register} />
        <Stack.Screen name="Home" options={{ headerShown:false }} component={Home} />
        <Stack.Screen name="Produck" options={{ headerShown:false }} component={produck} />
        <Stack.Screen name="Ctproduck" options={{ headerShown:false }} component={Ctproduck} />
        <Stack.Screen name="Giohang" options={{ headerShown:false }} component={Giohang} />
        <Stack.Screen name="Thanhtoan" options={{ headerShown:false }} component={Thanhtoan} />
        <Stack.Screen name="thanhtoanct" options={{ headerShown:false }} component={ctthanhtoan} />
        <Stack.Screen name="chat" options={{ headerShown:false }} component={chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;